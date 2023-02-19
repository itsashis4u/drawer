## React Native Drawer Menu Challenge

This project is a solution to the React Native Drawer Menu Challenge. The objective of this challenge is to build a drawer menu with bottom tab navigation and a couple of random screens using React Native.

The idea is to create a Drawer component which is similar to `react-navigation`'s drawer component. I initially tried to pass a custom drawer component to the Drawer library by React Navigation. But that didn't work out well. So, I created one from scratch.

The part I couldn't solve for was the stack navigation screen (screen 2) which adds a back button to the bottom of the drawer's header menu. Ideally it should replace the drawer's header menu.

### Requirements

To successfully run this project, you will need:

- Node.js
- React Native Setup

### Steps

- Clone this repository
- `cd` into the repo
- `npm install`
- `npm start`
- `npm run ios` or `npm run android`

Screens

```
DrawerMenu
  - tab navigator (bottom tab navigation)
       home (stack navigation)
           screen1
           screen2
       contact
```
