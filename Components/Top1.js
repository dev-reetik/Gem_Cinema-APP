// Top1.js
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Trailer from "./Trailer";
import { useState, useEffect } from "react";

export default function Top1() {
  const [topMovie, setTopMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzM2OGYzYjE1MDhiZDFmOWVkZjEwM2U2NTdkMmYyNCIsIm5iZiI6MTcyMDgzODk1OS41ODM3ODksInN1YiI6IjY2OTE2NGM2Mjg5OTIyZjM1NDA2YjZmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BY4VsXozNsxF8rKWvNj8jd70dA1cZhCqy9o2m0hgQec",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          options
        );
        if (!response.ok) {
          throw new Error("NETWORK NOT OK");
        }

        const data = await response.json();
        const topMovieData = data.results[0];
        // console.log(topMovieData);
        setTopMovie({
          backgroundurl: topMovieData.poster_path,
          title: topMovieData.original_title,
          language: topMovieData.original_language,
          year: topMovieData.release_date,
          overview: topMovieData.overview,
          id:topMovieData.id
        });
      } catch (error) {
        setError(error);
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
      {topMovie && (
        <>
          <ImageBackground
            source={{
              uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${topMovie.backgroundurl}`,
            }}
            style={styles.backgroundImage}
            imageStyle={styles.imageStyle}
          >
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.8)"]}
              style={styles.gradient}
            />
          </ImageBackground>

          <View style={styles.movieDetails}>
            <Text style={styles.title}>{topMovie.title}</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>{topMovie.year}</Text>
              <Text style={styles.infoText}>{topMovie.language}</Text>
              <Text style={styles.infoText}>Rating</Text>
            </View>

            <Trailer topMovie={topMovie} />

            <Text style={styles.description}>{topMovie.overview}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: 400,
    height: 500,
    resizeMode: "center",
  },
  imageStyle: {
    backgroundColor: "black",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
  },
  movieDetails: {
    padding: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    letterSpacing: 5,
    fontWeight: "700",
    color: "white",
    marginBottom: 10,
    textAlign: "center",
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoText: {
    color: "white",
    marginRight: 20,
  },
  button: {
    marginTop: 20,
  },
  description: {
    color: "white",
    marginTop: 10,
    textAlign: "center",
  },
});
