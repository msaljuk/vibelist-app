import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {UserContext} from './contexts/UserContext';

import Home from './screens/Home/Home';
import Entry from './screens/Entry/Entry';

const Stack = createStackNavigator();

const App = () => {
  const user = useContext(UserContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user.isLoggedIn ? 'Home' : 'Entry'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Entry" component={Entry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
