import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import theme, { Box, Text } from '../../components/Theme';

const styles = StyleSheet.create({
  container: {
    width: theme.constants.screenWidth,
    height: 77,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.light,
    padding: 10,
  },
});

interface Props {
  photoUrl: string;
  displayName: string;
  onPress: () => void;
}

const MessageCard: FC<Props> = ({ displayName, photoUrl, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.container}>
      <Image
        {...{ uri: photoUrl }}
        tint="light"
        transitionDuration={300}
        style={{ width: 57, height: 57, borderRadius: 15 }}
      />
      <Text ml="l" variant="h2">
        {displayName}
      </Text>
    </TouchableOpacity>
  );
};

export default MessageCard;
