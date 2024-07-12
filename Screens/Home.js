import { StyleSheet, Text, View } from 'react-native';
import Top1 from '../Components/Top1';

export default function Home() {
  return (
    <View style={styles.container}>
      <Top1/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 alignItems: 'center',
    justifyContent: 'center',
  },
});
