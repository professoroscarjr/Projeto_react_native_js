import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./src/logo.png")}
      style={styles.logo}
      />
      <Text style={styles.text}>Sejá bem vindo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#fff',
  },
  logo:{
    marginBottom:60
  }
});
