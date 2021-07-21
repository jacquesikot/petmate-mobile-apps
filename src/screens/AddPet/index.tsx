import React from 'react';
import { StyleSheet } from 'react-native';

import theme, { Box, Text } from '../../components/Theme';

const styles = StyleSheet.create({
  container: {},
});

// interface Props {}

const AddPet = () => {
  return (
    <Box style={styles.container}>
      <Text>AddPet</Text>
    </Box>
  );
};

export default AddPet;
