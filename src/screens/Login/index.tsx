import React from 'react';
import { StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

import theme, { Box, Text } from '../../components/Theme';
import Logo from '../../svgs/Logo';
import Background from '../../svgs/Background';
import TextInput from '../../components/TextInput';

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
  },
  headerText: {
    marginTop: '25%',
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
});

// interface Props {}

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
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

        <Text variant="b2">Login with Gmail or Facebook</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
