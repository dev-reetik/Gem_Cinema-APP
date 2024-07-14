import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";



const TvSeries = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: 'Enter Your API',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
          options
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Cards movie={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const Cards = ({ movie }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.original_name}</Text>
      <Text style={styles.overview}>🎬 Release : {movie.first_air_date}</Text>
      <Text style={styles.overview}>⭐ Rating : {movie.vote_average}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
  card: {
    width: 185,
    height: 320,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#f8f8f8",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
    padding: 10,
    overflow: "hidden",
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  overview: {
    fontSize: 13,
    marginTop: 5,
  },
  separator: {
    width: 20,
  },
});

export default TvSeries;
