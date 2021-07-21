import React from 'react';
import { SafeAreaView, ImageBackground, TouchableOpacity, Keyboard } from 'react-native';
import { AntDesign as Icon } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';

import styles from './styles';
import { Box, Text } from '../../components/Theme';
import Logo from '../../svgs/Logo';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { ProfileNavParamList } from '../../types/navigation.types';

const ICON_SIZE = 22;

const Login = ({ navigation }: StackScreenProps<ProfileNavParamList, 'Login'>) => {
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

          <Box style={styles.headerText}>
            <Text variant="h1">Login</Text>
            <Text variant="b2">Login With Your Account To continue</Text>
          </Box>

          <Box style={styles.inputContainer}>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" secured={true} />
          </Box>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.forgotContainer}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={{ alignSelf: 'flex-end' }} variant="b2">
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <Box style={styles.horizontalLine} />

          <Text style={{ marginBottom: 15 }} variant="b2">
            Login with Gmail or Facebook
          </Text>

          <Box style={styles.buttonContainer}>
            <Button
              type="white"
              icon={<Icon name="google" color="#DB4437" size={ICON_SIZE} />}
              label="Google"
              width="48%"
              border
            />
            <Button
              type="white"
              icon={<Icon name="facebook-square" color="#4267B2" size={ICON_SIZE} />}
              label="Facebook"
              width="48%"
              border
            />
          </Box>

          <Box style={{ flex: 1 }} />

          <Box style={styles.registerTextContainer}>
            <Text variant="b2">Dont have an account yet?</Text>
            <Text variant="b2m" color="secondary" ml="s">
              Register
            </Text>
          </Box>

          <Button type="primary" label="Login" />
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
