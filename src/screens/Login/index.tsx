import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, TouchableOpacity, Keyboard } from 'react-native';
import { AntDesign as Icon } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';

import styles from './styles';
import { Box, Text } from '../../components/Theme';
import Logo from '../../svgs/Logo';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { ProfileNavParamList } from '../../types/navigation.types';
import ActivityScreen from '../../components/ActivityScreen';
import Toast from 'react-native-toast-message';
import { googleAuth } from '../../firebase/auth';

const ICON_SIZE = 22;

const Login = ({ navigation }: StackScreenProps<ProfileNavParamList, 'Login'>) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      await googleAuth();

      navigation.navigate('Profile');

      setLoading(false);

      Toast.show({
        text1: 'Login',
        text2: 'Login Successfull',
        type: 'success',
        autoHide: true,
        position: 'top',
        visibilityTime: 3000,
      });
    } catch (error) {
      setLoading(false);

      console.log(error);

      Toast.show({
        text1: 'Login',
        text2: 'Login Not Succesfull',
        type: 'error',
        autoHide: true,
        position: 'top',
        visibilityTime: 3000,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={{ height: '100%' }}
        onPress={() => Keyboard.dismiss()}>
        <ActivityScreen visible={loading} />

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
              onPress={handleGoogleLogin}
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
