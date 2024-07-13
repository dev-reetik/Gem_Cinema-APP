import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Top1 from '../Components/Top1';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={{display:'flex', justifyContent:'center', alignItems:'center'}} >
      <Top1 />
      </View>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black'
  },
 
});
