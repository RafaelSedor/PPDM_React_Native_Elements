import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login button pressed');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text h3>Login</Text>
      <Input
        placeholder="Email"
        leftIcon={{ type: 'material', name: 'email' }}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        leftIcon={{ type: 'material', name: 'lock' }}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default LoginScreen;
