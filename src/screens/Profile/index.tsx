import React from 'react';
import { StyleSheet } from 'react-native';
import Button from '../../components/Button';
import { StackScreenProps } from '@react-navigation/stack';

import theme, { Box, Text } from '../../components/Theme';
import { ProfileNavParamList } from '../../types/navigation.types';

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
  return (
    <Box style={styles.container}>
      <Button type="primary" label="Login" onPress={() => navigation.navigate('Login')} />

      <Box mt="xl">
        <Button type="secondary" label="Register" onPress={() => navigation.navigate('Register')} />
      </Box>
    </Box>
  );
};

export default Profile;
