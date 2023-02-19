import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {DrawerScreen} from './src/screens/drawer';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerScreen />
    </NavigationContainer>
  );
};

export default App;
