import React from 'react';
import { SafeAreaView, ImageBackground, TouchableOpacity, Keyboard } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';

import styles from './styles';
import theme, { Box, Text } from '../../components/Theme';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { ProfileNavParamList } from '../../types/navigation.types';

const ForgotPassword = ({
  navigation,
}: StackScreenProps<ProfileNavParamList, 'ForgotPassword'>) => {
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
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" color={theme.colors.secondary} size={24} />
          </TouchableOpacity>

          <Box style={styles.headerText}>
            <Text variant="h1">Forgot Password</Text>
            <Text variant="b2">Enter you email to reset your password</Text>
          </Box>

          <Box style={styles.inputContainer}>
            <TextInput placeholder="Email" />
          </Box>

          <Text variant="b2">
            Enter your registered email and we will send you an email which contains a link to reset
            your password
          </Text>

          <Box style={{ flex: 1 }} />

          <Button type="primary" label="Submit" />
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ForgotPassword;
