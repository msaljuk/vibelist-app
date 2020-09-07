import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login/Login';
import Signup from './Signup/Signup';

const EntryStack = createStackNavigator();

const Entry = () => {
  return (
    <EntryStack.Navigator
      initialRouteName={'Signup'}
      screenOptions={{headerShown: false}}>
      <EntryStack.Screen name="Login" component={Login} />
      <EntryStack.Screen name="Signup" component={Signup} />
    </EntryStack.Navigator>
  );
};

export default Entry;
