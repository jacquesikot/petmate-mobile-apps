import React, { FC, ReactNode } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

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
  onPress?: () => void;
}

const Button: FC<Props> = ({ type, label, icon, width, border, onPress = () => true }) => {
  const widthValue = width ? width : theme.constants.screenWidth;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
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
    </TouchableOpacity>
  );
};

export default Button;
