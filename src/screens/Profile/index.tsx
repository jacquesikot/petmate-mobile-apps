/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { StyleSheet } from 'react-native';
import Button from '../../components/Button';
import { StackScreenProps } from '@react-navigation/stack';

import theme, { Box, Text } from '../../components/Theme';
import { ProfileNavParamList } from '../../types/navigation.types';
import { logout } from '../../firebase/auth';
import Toast from 'react-native-toast-message';
import useUser from '../../hooks/useUser';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    width: 150,
    height: 47,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// interface Props {}

const Profile = ({ navigation }: StackScreenProps<ProfileNavParamList, 'Profile'>) => {
  const user = useUser();

  const handleLogout = async () => {
    try {
      await logout();
      Toast.show({
        text1: 'Logout',
        text2: 'Logout Success',
        type: 'success',
        autoHide: true,
        position: 'top',
        visibilityTime: 3000,
      });
    } catch (error) {
      console.log(error);
      Toast.show({
        text1: 'Logout',
        text2: 'Logout Error',
        type: 'error',
        autoHide: true,
        position: 'top',
        visibilityTime: 3000,
      });
    }
  };

  return (
    <Box style={styles.container}>
      {user.email ? (
        <Box mt="xl">
          <Button type="white" label="Logout" onPress={handleLogout} />
        </Box>
      ) : (
        <>
          <Button type="primary" label="Login" onPress={() => navigation.navigate('Login')} />

          <Box mt="xl">
            <Button
              type="secondary"
              label="Register"
              onPress={() => navigation.navigate('Register')}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Profile;
