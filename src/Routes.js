import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from './pages/MainPage';
import BookPage from './pages/BookPage';

const AppStack = createStackNavigator();

const Routes = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0ee87'
          }
        }}
        >
        <AppStack.Screen name="Main" component={MainPage}/>
        <AppStack.Screen name="Book" component={BookPage}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}; 

export default Routes;