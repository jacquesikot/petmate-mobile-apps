/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import MessageCard from '../../components/MessageCard';

import theme, { Box, Text } from '../../components/Theme';
import useUser from '../../hooks/useUser';
import { ConsultNavParamList } from '../../types/navigation.types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
});

// interface Props {}

const MessageList = ({ navigation }: StackScreenProps<ConsultNavParamList, 'MessageList'>) => {
  const user = useUser();

  return (
    <Box style={styles.container}>
      <MessageCard
        displayName={user.displayName}
        photoUrl={user.photoURL}
        onPress={() => navigation.navigate('Chat')}
      />
    </Box>
  );
};

export default MessageList;
