import React, { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';

import theme, { Box, Text } from '../Theme';

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    flexDirection: 'row',
  },
});

interface Props {
  type: 'primary' | 'secondary' | 'white';
  label: string;
  icon?: ReactNode;
  width?: number | string;
  border?: boolean;
}

const Button: FC<Props> = ({ type, label, icon, width, border }) => {
  const widthValue = width ? width : theme.constants.screenWidth;

  return (
    <Box
      style={[
        styles.container,
        {
          backgroundColor: theme.colors[type],
          width: widthValue,
          borderWidth: border ? 1 : 0,
          borderColor: border ? theme.colors.light : theme.colors.white,
        },
      ]}>
      {icon && icon}
      <Text
        variant="button"
        ml={icon ? 'l' : 'none'}
        style={{ color: type === 'white' ? theme.colors.secondary : theme.colors.white }}>
        {label}
      </Text>
    </Box>
  );
};

export default Button;
