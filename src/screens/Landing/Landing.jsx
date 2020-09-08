import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Discover from '../Discover/Discover';
import Profile from '../Profile/Profile';
import Home from '../Home/Home';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faSearch, faUser} from '@fortawesome/free-solid-svg-icons';

import styles from './Landing.module.scss';

const ACTIVE_LABEL_COLOR = '#493B9D';
const INACTIVE_LABEL_COLOR = '#373738';

const HOME_ICON_SIZE = 30;

const LandingTab = createBottomTabNavigator();

const App = () => {
  return (
    <LandingTab.Navigator
      initialRouteName={'Home'}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let icon;

          if (route.name === 'Home') {
            icon = faHome;
            size = HOME_ICON_SIZE;
          } else if (route.name === 'Profile') {
            icon = faUser;
          } else if (route.name === 'Discover') {
            icon = faSearch;
          }

          return <FontAwesomeIcon color={color} icon={icon} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: ACTIVE_LABEL_COLOR,
        inactiveTintColor: INACTIVE_LABEL_COLOR,
        labelStyle: styles.tab,
        style: styles.tabBar,
      }}>
      <LandingTab.Screen name="Discover" component={Discover} />
      <LandingTab.Screen name="Home" component={Home} />
      <LandingTab.Screen name="Profile" component={Profile} />
    </LandingTab.Navigator>
  );
};

export default App;
