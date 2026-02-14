import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native';

const gray = '#BCB8B0'
const lowYellow = '#e4d656'
const white = '#FFFEF2'
const black = '#35342d'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login in</Text>
      
      <TextInput style={styles.input} placeholder='email' placeholderTextColor={white}/>
      <TextInput style={styles.input} placeholder='Password' placeholderTextColor={white}/>

      <View style={styles.container_or}>

        <View style={styles.bars}></View>
        <Text style={styles.text_or}>OR</Text>
        <View style={styles.bars}></View>

      </View>

      <Pressable style={styles.button}>
        <Text style={styles.textEnter}>Enter With {google.enterWith}</Text>
        <Image source={google.icon} style={styles.image}/>

      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.textEnter}>Enter With {apple.enterWith}</Text>
        <Image source={apple.icon} style={styles.image}/>

      </Pressable>
      

      <Pressable style={styles.button}>
        <Text style={styles.textEnter}>Enter With {microsoft.enterWith}</Text>
        <Image source={microsoft.icon} style={styles.image}/>

      </Pressable>
      
      <StatusBar style="auto" />
    </View>
  );
}


const icons = {

  google: {
    enterWith: 'Google',
    icon: require('./assets/google.png')
  },

  apple: {
    enterWith: 'Apple',
    icon: require('./assets/apple.png')
  },

  microsoft: {
    enterWith: 'Microsoft',
    icon: require('./assets/microsoft.png')
  }

}

const {google, apple, microsoft} = icons


const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    backgroundColor: gray,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 90,
    color: lowYellow,
    fontWeight: 'bold',
  },

  input: {
    paddingHorizontal: 10,
    backgroundColor: lowYellow,
    borderRadius: 15,
    width: 340,
    height: 50 
  }, 

  bars: {
    height: 10,
    width: 130,
    backgroundColor: black,
    borderRadius: 15
  },

  container_or: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center'
  },

  text_or: {
    color: lowYellow,
    fontWeight: 'bold',
    fontSize: 35
  },

  image: {
    width: 30,
    height: 30,
    backgroundColor: lowYellow
  },

  button: {
    flexDirection: 'row',
    backgroundColor: lowYellow,
    width: 340,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 15,
    color: white
  },

  textEnter: {
    color: white,
    fontWeight: 'bold',
    fontSize: 20
  }
});
