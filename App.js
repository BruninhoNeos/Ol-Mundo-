import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import Header from './componentes/Header'
import Card from './componentes/Card'

export default function App() {
  return (
    <View style={estilo.container}>
     
      <Header></Header>

      <Card porcentagem = '1%' titulo = 'Futebol' imagem = 'https://cdn-icons-png.flaticon.com/512/1071/1071234.png'></Card>    
      <Card porcentagem = '30%' titulo = 'Escola'  imagem = 'https://cdn-icons-png.flaticon.com/512/566/566985.png'></Card> 
      <Card porcentagem = '30%' titulo = 'Igreja'  imagem = 'https://cdn-icons-png.flaticon.com/512/1209/1209021.png'></Card>   
      <Card porcentagem = '100%' titulo = 'Deus'   imagem = 'https://cdn-icons-png.flaticon.com/512/215/215544.png'></Card>

    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CAF0F8',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  },
  
 
  
  
});