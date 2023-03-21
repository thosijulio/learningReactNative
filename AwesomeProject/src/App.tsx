import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import CompPadrao, { Comp1, Comp2 } from './components/Multi';
import Primeiro from './components/Primeiro';

const App: () => JSX.Element = () => {
  return (
    <SafeAreaView>
      <Text>Aqui</Text>
      <CompPadrao />
      <Comp1 />
      <Comp2 />
      <Primeiro />
    </SafeAreaView>
  );
}

export default App;
