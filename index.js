import {name as appName} from './app.json';
import React from 'react';
import {AppRegistry} from 'react-native';

import App from './src/App';
import {UserProvider} from './src/contexts/UserContext';

const index = () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
};

AppRegistry.registerComponent(appName, () => index);
