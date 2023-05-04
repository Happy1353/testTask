import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login} from './src/Screens/Login/Login';
import {Main} from './src/Screens/Main/Main';
import {Image} from './src/Screens/Image/Image';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Image" component={Image} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
