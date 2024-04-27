import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/main/Home';
import Basicanimation from '../screens/side/Basicanimation';
import Interpolation from '../screens/side/Interpolation';
import Drag from '../screens/side/Drag';
import HomeScreen from '../screens/side/sidefoodrecipe/HomeScreen';
import MainScreen from '../screens/side/sidefoodrecipe/MainScreen';
import RecipeDetails from '../screens/side/sidefoodrecipe/RecipeDetails';
const Stack = createNativeStackNavigator();
const Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HOME"
          component={Home}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Basic"
          component={Basicanimation}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Interpolation"
          component={Interpolation}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Drag"
          component={Drag}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;

const styles = StyleSheet.create({});
