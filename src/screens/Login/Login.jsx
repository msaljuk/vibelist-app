import React, {useContext, useState} from 'react';

import {login} from '../../../api/client';

import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {UserContext} from '../../contexts/UserContext';
import Loader from '../../components/Loader/Loader';

import styles from './Login.module.scss';

const Login = () => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const user = useContext(UserContext);

  const validateLoginFields = () => {
    let validated = true;

    if (email.trim() == '' || password.trim() == '') {
      validated = false;
      setStatusMessage('Please type in an email and password');
    }

    return validated;
  };

  const handleLoginAttempt = async () => {
    const validated = await validateLoginFields();

    if (!validated) return;

    setIsLoading(true);
    setStatusMessage('');

    const response = await login(email, password);

    if (response && response.status == 200) {
      user.setId(response.data.payload.userID);
      user.setIsLoggedIn(true);

      setStatusMessage('User Successfully Logged In.');
    } else {
      setStatusMessage('Invalid Login. Please try again.');
    }

    setIsLoading(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginHeaderText}>{`login`}</Text>
        <View style={styles.divider}></View>
        <Text style={styles.statusMessage}>{statusMessage}</Text>
      </View>
      <View style={styles.loginFieldsContainer}>
        <TextInput
          onChangeText={(email) => onChangeEmail(email)}
          placeholder={`email`}
          style={styles.loginField}
          value={email}></TextInput>
        <TextInput
          onChangeText={(password) => onChangePassword(password)}
          placeholder={`password`}
          textContentType={'password'}
          secureTextEntry={true}
          style={styles.loginField}
          value={password}></TextInput>
      </View>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity
          disabled={isLoading}
          onPress={() => {
            handleLoginAttempt();
          }}
          style={styles.loginButton}
          accessibilityLabel="Login Button">
          <Text style={styles.loginButtonText}>{`Login`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
