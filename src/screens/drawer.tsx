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

function ProfileName({name}: {name: string}) {
  return (
    <View style={styles.profileNameContainer}>
      <Text style={[styles.whiteText, styles.header]}>{name}</Text>
    </View>
  );
}

export function DrawerScreen() {
  return (
    <Drawer
      list={DRAWER_ITEMS}
      HeaderComponent={() => <ProfileName name="Beka" />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileNameContainer: {
    marginVertical: 50,
    paddingHorizontal: 40,
  },
  whiteText: {
    color: 'white',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
