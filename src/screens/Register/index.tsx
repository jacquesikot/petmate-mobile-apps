import React, { useState } from 'react';
import {
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import styles from './styles';
import { Box, Text } from '../../components/Theme';
import Logo from '../../svgs/Logo';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';

const Register = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={{ height: '100%' }}
        onPress={() => Keyboard.dismiss()}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../../../assets/images/background.png')}
          resizeMode="cover">
          <Logo width={167} height={50} />

          <KeyboardAvoidingView behavior="position">
            <Box style={styles.headerText}>
              <Text variant="h1">Register</Text>
              <Text variant="b2">Create a Account to start Using</Text>
            </Box>

            <Box style={styles.inputContainer}>
              <TextInput placeholder="Name" />
              <TextInput placeholder="Email Address" />
              <TextInput placeholder="Password" secured={true} />
            </Box>
          </KeyboardAvoidingView>

          <Box style={styles.checkboxContainer}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => setChecked(!checked)}>
              <Checkbox checked={checked} />
            </TouchableOpacity>
            <Text style={styles.conditionsTextContainer}>
              <Text variant="b2">By Signing up i Agree to the </Text>
              <Text variant="b2m" color="secondary">
                terms and conditions & privacy policy
              </Text>
            </Text>
          </Box>

          <Box style={{ flex: 1 }} />

          <Box style={styles.registerTextContainer}>
            <Text variant="b2">Already have an account?</Text>
            <Text variant="b2m" color="secondary" ml="s">
              Login
            </Text>
          </Box>

          <Button type="primary" label="Create Account" />
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Register;
