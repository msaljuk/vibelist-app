import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {UserContext} from './contexts/UserContext';

import Landing from './screens/Landing/Landing';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';

const Stack = createStackNavigator();

const App = () => {
  const user = useContext(UserContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user.isLoggedIn ? (
          <>
            <Stack.Screen name="Landing" component={Landing} />
          </>
        ) : (
          <>
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
