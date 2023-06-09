import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Aleatorio from './components/Aleatorio';
import MinMax from './components/MinMax';
import CompPadrao, { Comp1, Comp2 } from './components/Multi';
import Primeiro from './components/Primeiro';

const style = StyleSheet.create({
  App: {
    backgroundColor: "#A00",
  },
})

const App: () => JSX.Element = () => {
  console.warn("Aqui!");
  return (
    <SafeAreaView style={style.App}>
      <Text>Aqui</Text>
      <CompPadrao />
      <Comp1 />
      <Comp2 />
      <Primeiro />
      <MinMax min={1} max={10} />
      <Aleatorio min={5} max={11} />
    </SafeAreaView>
  );
}

export default App;
