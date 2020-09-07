import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './Signup.module.scss';

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.appIntro}>
        <Text style={styles.appName}>{`vibelist`}</Text>
        <View style={styles.divider}></View>
        <Text
          style={styles.appTagline}>{`your friends, activities & moods`}</Text>
        <Text style={styles.appTaglineEnd}>{`together.`}</Text>
      </View>
      <View style={styles.signupContainer}>
        <Text
          style={styles.login}
          onPress={() =>
            navigation.navigate('Login')
          }>{`I already have an account`}</Text>
        <TouchableOpacity
          style={styles.signupButton}
          accessibilityLabel="Sign Up Button">
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
        <Text
          style={
            styles.terms
          }>{`By using Vibelist, you agree to the Privacy Policy and the Terms of Service`}</Text>
      </View>
    </View>
  );
};

export default Signup;
