import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

import theme, { Box, Text } from '../Theme';
import Pet from '../../types/pet';
import LocationIcon from '../../svgs/LocationIcon';

const styles = StyleSheet.create({
  container: {
    width: theme.constants.screenWidth,
    height: 150,
    borderRadius: 28,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    padding: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.light,
  },
  imageContainer: {
    width: 138,
    height: 138,
    borderRadius: 28,
    backgroundColor: theme.colors.green,
    marginRight: 16,
  },
  textContainer: {
    height: 120,
    width: '50%',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  pill: {
    height: 25,
    width: 55,
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  pillContainer: {
    flexDirection: 'row',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  pet: Pet;
}

const PetCard: FC<Props> = ({ pet }) => {
  return (
    <Box style={styles.container}>
      <Box style={styles.imageContainer} />

      <Box style={styles.textContainer}>
        <Text variant="h2">{pet.name}</Text>

        <Text variant="h3">{pet.breed}</Text>

        <Box style={styles.pillContainer}>
          <Box style={[styles.pill, { backgroundColor: '#dae1fe' }]}>
            <Text variant="b3" color="blue">
              {pet.gender}
            </Text>
          </Box>

          <Box style={[styles.pill, { backgroundColor: theme.colors.lightYellow }]}>
            <Text variant="b3" color="primary">
              {pet.age + ` Year${pet.age === '1' ? '' : 's'}`}
            </Text>
          </Box>
        </Box>

        <Box style={styles.locationContainer}>
          <LocationIcon width={14} height={16} />

          <Text numberOfLines={1} variant="b2" ml="s">
            {pet.location.address}
          </Text>
        </Box>

        <Text variant="h3" color="primary">
          2km Away
        </Text>
      </Box>
    </Box>
  );
};

export default PetCard;
