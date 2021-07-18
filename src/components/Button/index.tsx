import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import theme, { Box, Text } from '../Theme';

const styles = StyleSheet.create({
  container: {
    width: theme.constants.screenWidth,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
});

interface Props {
  type: 'primary' | 'secondary';
  label: string;
}

const Button: FC<Props> = ({ type, label }) => {
  const bgColor = type === 'primary' ? theme.colors.primary : theme.colors.secondary;
  return (
    <Box style={[styles.container, { backgroundColor: bgColor }]}>
      <Text variant="button">{label}</Text>
    </Box>
  );
};

export default Button;
