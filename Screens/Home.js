import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import Top1 from "../Components/Top1";
import Discover from "../Components/Discover";
import Popular from "../Components/Popular";
import TvSeries from "../Components/TvSeries";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Top1 />
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            gap: 190,
            marginTop: 20,
          }}
        >
          <Text
            style={{ color: "white", alignSelf: "flex-start", fontSize: 20 }}
          >
            Discover Movies
          </Text>
          <Text style={{ color: "white", fontSize: 20, color: "orange" }}>
            {">"}
          </Text>
        </View>
        <Discover />
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            gap: 250,
            marginTop: 20,
          }}
        >
          <Text
            style={{ color: "white", alignSelf: "flex-start", fontSize: 20 }}
          >
            Trending
          </Text>
          <Text style={{ color: "white", fontSize: 20, color: "orange" }}>
            {">"}
          </Text>
        </View>
        <Popular />
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            gap: 250,
            marginTop: 20,
          }}
        >
          <Text
            style={{ color: "white", alignSelf: "flex-start", fontSize: 20 }}
          >
            TV SERIES
          </Text>
          <Text style={{ color: "white", fontSize: 20, color: "orange" }}>
            {">"}
          </Text>
        </View>
        <TvSeries />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});
