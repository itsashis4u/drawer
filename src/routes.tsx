import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import React from 'react';
import {Alert, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const Home = () => (
  <SafeAreaView>
    <View style={{padding: 10}}>
      <Text>Home</Text>
    </View>
  </SafeAreaView>
);

function CustomDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => Alert.alert('Help')} />
    </DrawerContentScrollView>
  );
}

function CustomIcon({onPress}: {onPress: () => void}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.icon} source={require('./assets/menu.png')} />
    </TouchableOpacity>
  );
}

type NavigationProp = DrawerNavigationProp<
  {
    Home: undefined;
    Settings: undefined;
  },
  'Home'
>;

export function Routes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawer}
      screenOptions={({navigation}: {navigation: NavigationProp}) => {
        return {
          headerLeftContainerStyle: {
            paddingLeft: 16,
          },
          headerLeft() {
            return <CustomIcon onPress={navigation.toggleDrawer} />;
          },
          headerStyle: styles.headerStyle,
          headerTitleAllowFontScaling: true,
          headerTitleAlign: 'left',
          headerTitleStyle: styles.headerTitleStyle,
        };
      }}>
      <Drawer.Screen
        options={{
          title: 'HOME',
        }}
        name="Home"
        component={Home}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    borderWidth: 1,
    borderColor: 'red',
  },
  headerTitleStyle: {
    color: 'grey',
    letterSpacing: 4,
    textAlign: 'left',
    fontSize: 22,
  },
  icon: {
    tintColor: 'lightgrey',
    width: 20,
    height: 20,
  },
});
