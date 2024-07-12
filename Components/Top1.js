import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "@react-native-material/core";
import { useState, useEffect } from "react";

export default function Top1() {
  const [background, setBackground] = useState(null);
  const [title, settitle] = useState(null);
  const [genere, setgenere] = useState(null);
  const [year, setyear] = useState(null);
 
  const [loading, setloading] = useState(null);
  const [error, seterror] = useState(null);

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "Enter your key ",
      "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://imdb-top-100-movies.p.rapidapi.com/",
          options
        );
        if (!response.ok) {
          throw new error("NETWORK NOT OK");
        }

        const background = await response.json();
        const topMovie = background.find((movie) => movie.rank === 1);
        const backgroundImageUrl = topMovie.image;
        const title = topMovie.title;
        const genre = topMovie.genre;
        const year = topMovie.year;
        console.log(topMovie);
        setBackground(backgroundImageUrl);
        settitle(title);
        setgenere(genre);
        setyear(year);
       
      } catch (error) {
        seterror(error);
      } finally {
        setloading(false);
      }
    };
    fetchdata();
  }, []);

  if (loading) {
    return <Text>loading</Text>;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: `${background}`,
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
        <Text style={styles.title}>{title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{year}</Text>
          <Text style={styles.infoText}>{genere}</Text>
          <Text style={styles.infoText}>rating</Text>
        </View>

        <Button
          variant="outlined"
          title="WATCH TRAILER"
          color="red"
          style={styles.button}
          onPress={() => {
            console.log("trailer");
          }}
        />

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </View>
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
