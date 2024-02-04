import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'; // criar e utilizar estados
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const[Number, setNumber] = useState('')
  const[Number2, setNumber2] = useState('')
  let Total

  function Calcular(){
    Total = parseInt(Number) + parseInt(Number2)
    alert(Total)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <TextInput 
      style={styles.input}
      placeholder='Insira um valor'
      value={Number}
      onChangeText={ (Number) => setNumber(Number)}
      keyboardType='numeric'
      />

      <TextInput 
      style={styles.input}
      placeholder='Insira um valor'
      value={Number2}
      onChangeText={ (Number2) => setNumber2(Number2)}
      keyboardType='numeric'
      />
      
      <TouchableOpacity 
      style={styles.button}
      onPress={Calcular}
      >
        <Text style={styles.textbutton}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    textAlign: 'center',
    color: '#f5e9c1',
    justifyContent: 'center',
    marginTop: 25,
    fontSize: 20,
    marginBottom: 10,
  },

  input:{
    backgroundColor:'#f5e9c1',
    borderRadius: 10,
    margin: 5,
    padding: 8,
    color: '#AAA'
  },
  button:{
    backgroundColor: '#8A657A',
    borderRadius: 5,
    margin: 5,
    padding: 8,
    alignItens: 'center',
    justifyContent: 'center',
  },

  textbutton:{
  fontSize: 13,
  color: '#FFF'
  }
});
