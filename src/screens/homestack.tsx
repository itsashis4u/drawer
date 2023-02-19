import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '../navigation/drawer/components/button';

type HomeStackParamList = {
  ScreenOne: undefined;
  ScreenTwo: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

type ScreenOneNavigationProp = NativeStackScreenProps<
  HomeStackParamList,
  'ScreenOne'
>;

function ScreenOne({navigation}: ScreenOneNavigationProp) {
  return (
    <View style={styles.container}>
      <Text>Screen One</Text>
      <Button
        title="Click"
        onPress={() => {
          navigation.navigate('ScreenTwo');
        }}
      />
    </View>
  );
}

function ScreenTwo() {
  return (
    <View style={styles.container}>
      <Text>Screen Two</Text>
    </View>
  );
}

export function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="ScreenOne"
        component={ScreenOne}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        options={{
          headerTitle: '',
        }}
        name="ScreenTwo"
        component={ScreenTwo}
      />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
