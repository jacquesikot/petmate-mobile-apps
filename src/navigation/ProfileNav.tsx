import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProfileNavParamList } from '../types/navigation.types';
import { Profile, Login, Register, ForgotPassword } from '../screens';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const ProfileStack = createStackNavigator<ProfileNavParamList>();

const ProfileNav = () => {
  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Login" component={Login} />
      <ProfileStack.Screen name="Register" component={Register} />
      <ProfileStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNav;
