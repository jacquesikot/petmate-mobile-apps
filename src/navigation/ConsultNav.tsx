import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ConsultNavParamList } from '../types/navigation.types';
import { Consult, Chat, MessageList } from '../screens';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const ConsultStack = createStackNavigator<ConsultNavParamList>();

const ConsultNav = () => {
  return (
    <ConsultStack.Navigator headerMode="none">
      <ConsultStack.Screen name="MessageList" component={MessageList} />
      <ConsultStack.Screen name="Consult" component={Consult} />
      <ConsultStack.Screen name="Chat" component={Chat} />
    </ConsultStack.Navigator>
  );
};

export default ConsultNav;
