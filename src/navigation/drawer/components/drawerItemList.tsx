import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DrawerItem} from './drawerItem';

export interface ListItem {
  label: string;
  component: () => JSX.Element;
}

interface DrawerItemListProps {
  list: ListItem[][];
  onItemPress: (screen: string) => void;
  selectedItem: string;
}

export function DrawerItemList({
  list,
  selectedItem,
  onItemPress,
}: DrawerItemListProps) {
  let componentsToRender: JSX.Element[] = [];
  list.forEach((section, index) => {
    section.forEach(screen => {
      componentsToRender.push(
        <DrawerItem
          key={screen.label}
          label={screen.label}
          isFocused={selectedItem === screen.label}
          onPress={() => onItemPress(screen.label)}
        />,
      );
    });

    if (index !== list.length - 1) {
      componentsToRender.push(<View key={index} style={styles.divider} />);
    }
  });

  return <View>{componentsToRender.map(Component => Component)}</View>;
}

const styles = StyleSheet.create({
  divider: {
    marginVertical: 50,
    width: '50%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'grey',
  },
});
