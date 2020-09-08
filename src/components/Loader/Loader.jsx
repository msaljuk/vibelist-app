import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import styles from './Loader.module.scss';

const LOADER_SIZE = 100;

const Loader = () => (
  <View pointerEvents={'none'} style={styles.loaderContainer}>
    <ActivityIndicator size={LOADER_SIZE} color="#5a57e8" />
  </View>
);

export default Loader;
