import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {HStack} from '../../components/HStack';
import {MenuIcon} from '../../components/menuIcon';
import {DrawerItemList, ListItem} from './components/drawerItemList';

const MAX_MARGIN_TOP = 50;
const MIN_MARGIN_TOP = 0;
const ANIMATION_DURATION = 500;

const {width: DEVICE_WIDTH} = Dimensions.get('window');

interface DrawerProps {
  initialRoute?: string;
  list: ListItem[][];
}

// Array method to flatten an array
type FlattenArray<T> = T extends (infer U)[] ? U : T;

function flatten<T>(array: T[]): FlattenArray<T>[] {
  const flattened: FlattenArray<T>[] = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      flattened.push(...flatten(item));
    } else {
      flattened.push(item as FlattenArray<T>);
    }
  }
  return flattened;
}

export function Drawer({initialRoute, list = []}: DrawerProps) {
  if (!list.length) {
    throw new Error('Add at least one drawer screen');
  }

  const [focusedDrawerItem, setFocusedDrawerItem] = useState(
    initialRoute || list[0][0].label,
  );

  const profileName = 'Beka';

  function onDrawerItemPress(screen: string) {
    setFocusedDrawerItem(screen);
    handleButtonPress();
  }

  const marginTop = useSharedValue(0);

  const handleButtonPress = () => {
    if (marginTop.value === MIN_MARGIN_TOP) {
      marginTop.value = withTiming(MAX_MARGIN_TOP, {
        duration: ANIMATION_DURATION,
      });
    } else {
      marginTop.value = withTiming(MIN_MARGIN_TOP, {
        duration: ANIMATION_DURATION,
      });
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      marginTop: marginTop.value,
    };
  });

  const rotateAnimatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      marginTop.value,
      [MIN_MARGIN_TOP, MAX_MARGIN_TOP],
      [0, -10],
    );

    const left = interpolate(
      marginTop.value,
      [MIN_MARGIN_TOP, MAX_MARGIN_TOP],
      [0, DEVICE_WIDTH / 2 + 50],
    );

    return {
      left,
      transform: [{rotate: `${rotate}deg`}],
    };
  });

  const selectedScreen = flatten(list).find(
    item => item.label === focusedDrawerItem,
  );
  const Component = selectedScreen?.component;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedContainer, animatedStyle]}>
        <View style={styles.profileNameContainer}>
          <Text style={[styles.whiteText, styles.header]}>{profileName}</Text>
        </View>
        <DrawerItemList
          selectedItem={focusedDrawerItem}
          list={list}
          onItemPress={onDrawerItemPress}
        />
        <Animated.View
          style={[
            styles.animatedContainer,
            styles.screenContainer,
            rotateAnimatedStyle,
          ]}>
          <HStack style={styles.headerContainer}>
            <MenuIcon onPress={handleButtonPress} />
            <Text style={[styles.header, styles.screenName]}>
              {focusedDrawerItem.toLocaleUpperCase()}
            </Text>
          </HStack>
          <View style={styles.screenWrapper}>
            {Component ? <Component /> : null}
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {flex: 1},
  screenName: {
    fontSize: 22,
    paddingLeft: 40,
    letterSpacing: 1.5,
    color: 'grey',
    fontWeight: 'normal',
  },
  headerContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  screenContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    width: DEVICE_WIDTH,
    paddingHorizontal: 0,
  },
  profileNameContainer: {marginVertical: 50, paddingHorizontal: 40},
  container: {backgroundColor: 'white', flex: 1},
  animatedContainer: {
    backgroundColor: 'rgb(27, 26, 43)',
    flex: 1,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  whiteText: {
    color: 'white',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
