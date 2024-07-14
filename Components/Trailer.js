import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text, Linking } from "react-native";
import { Button } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import Video from "react-native-video";

export default function Trailer({ topMovie }) {
  const navigation = useNavigation();

  // console.log(topMovie.id);
  const [url, seturl] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.themoviedb.org/3/movie/${topMovie.id}/videos?api_key=93368f3b1508bd1f9edf103e657d2f24`
        );
        if (!response.ok) {
          throw new error("Network Not OK");
        }
        const data = await response.json();
        const trailer = data.results[1];
        seturl(trailer.key);
        console.log(url);
      } catch (error) {
        seterror(error);
        // console.log(error);
      } finally {
        setLoading(loading);
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

  const handlebutton = () => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${url}`;
    Linking.openURL(youtubeUrl);
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="outlined"
        title="WATCH TRAILER"
        color="red"
        style={styles.button}
        onPress={handlebutton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
