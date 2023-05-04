import React from 'react';
import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Image, Main, Login} from './src/Screens';

import {store} from './src/redux/store';

function App(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
