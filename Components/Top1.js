import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Top1() {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageBackground
          source={{
            uri: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png",
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 500,
            height: 500,
            resizeMode: "cover",

            backgroundColor: "black",
          }}
        ></ImageBackground>

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]} // Adjust the gradient colors and opacity as needed
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "50%",
          }}
        />
      </View>
      <View style={{ padding: 30, display:'flex', alignItems:'center' }}>
        <Text style={{ fontSize: 30, letterSpacing:10, fontWeight:'700', color: "white", alignItems: "center" }}>
         BATMAN
        </Text>
        <View style={{display:'flex', flexDirection:'row', gap:20}} >
        <Text style={{color:'white'}} >2014 </Text>
        <Text style={{color:'white'}} >Adventure, Comedy</Text>
        <Text style={{color:'white'}} >2h 14m</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
