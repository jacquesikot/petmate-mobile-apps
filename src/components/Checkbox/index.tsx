import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import theme, { Box } from '../Theme';
import Check from '../../svgs/Check';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  width?: string | number;
  height?: string | number;
  checked?: boolean;
}

const Checkbox: FC<Props> = ({ width, height, checked }) => {
  const widthValue = width ? width : 23;
  const heightValue = height ? height : 23;

  return (
    <Box style={[styles.container, { width: widthValue, height: heightValue }]}>
      {checked && <Check />}
    </Box>
  );
};

export default Checkbox;
