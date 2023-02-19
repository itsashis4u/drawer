import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Drawer} from '../navigation/drawer';
import {TabStack} from './tabs';

function DummyScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Dummy</Text>
    </View>
  );
}

// Dividing sections with a divider
const DRAWER_ITEMS = [
  [
    {
      label: 'Start',
      component: TabStack,
    },
    {
      label: 'Your Cart',
      component: DummyScreen,
    },
    {
      label: 'Favourites',
      component: DummyScreen,
    },
    {
      label: 'Your Orders',
      component: DummyScreen,
    },
  ],
  [
    {
      label: 'Sign Out',
      component: DummyScreen,
    },
  ],
];

export function DrawerScreen() {
  return <Drawer list={DRAWER_ITEMS} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
