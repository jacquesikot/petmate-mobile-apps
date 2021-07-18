import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { AntDesign as Icon } from '@expo/vector-icons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import theme, { Box, Text } from '../../components/Theme';
import Logo from '../../svgs/Logo';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const ICON_SIZE = 22;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    paddingHorizontal: theme.constants.screenPadding / 2,
    paddingTop: theme.constants.screenPadding,
    paddingBottom: theme.constants.screenPadding,
  },
  headerText: {
    marginTop: '20%',
    height: 60,
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginTop: 32,
    height: 130,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  horizontalLine: {
    width: theme.constants.screenWidth,
    height: 2,
    backgroundColor: theme.colors.white,
    marginTop: 22,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  registerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(3),
  },
});

const Login = () => {
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

          <Text style={{ alignSelf: 'flex-end' }} variant="b2">
            Forgot Password?
          </Text>

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

          <Box style={styles.registerTextContainer}>
            <Text variant="b2">Dont have an account yet?</Text>
            <Text variant="b2m" color="secondary" ml="s">
              Register
            </Text>
          </Box>

          <Box style={{ flex: 1 }} />

          <Button type="primary" label="Login" />
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
