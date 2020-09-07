import React, {useState} from 'react';

import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {UserContext} from './contexts/UserContext';

import styles from './Login.module.scss';

const Login = () => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const user = useContext(UserContext);

  const handleLoginAttempt = () => {
    setIsLoading(true);
    const response = login(email, password);
    if (response.status == OK) {
      user.setName(response.data.username);
      user.setID(response.data.userID);
      user.setIsLoggedIn(true);
    }
    setIsLoading(false);
    setStatusMessage(response.status.message);
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginHeaderText}>{`login`}</Text>
        <View style={styles.divider}></View>
        {statusMessage && <Text>{statusMessage}</Text>}
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
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
