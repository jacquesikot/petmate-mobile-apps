/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, FlatList } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import theme, { Box, Text } from '../../components/Theme';
import AlarmIcon from '../../svgs/AlarmIcon';
import CartIcon from '../../svgs/CartIcon';
import PetCard from '../../components/PetCard';
import pets from '../../data/pets';
import useUser from '../../hooks/useUser';

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    height: '120%',
    paddingHorizontal: theme.constants.screenPadding / 2,
    paddingTop: theme.constants.screenPadding,
    paddingBottom: theme.constants.screenPadding,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headTextContainer: {
    height: 54,
    justifyContent: 'space-between',
  },
  headIconsContainer: {
    flexDirection: 'row',
    width: 65,
    justifyContent: 'space-between',
  },
  addPetContainer: {
    width: theme.constants.screenWidth,
    height: 74,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: theme.colors.text,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});

const Home = () => {
  const user = useUser();
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../assets/images/background.png')}
        resizeMode="cover">
        <Box style={styles.header}>
          <Box style={styles.headTextContainer}>
            <Text variant="h1">Hello {user.email ? user.displayName : ''}</Text>
            <Text variant="b2m" color="secondary">
              Find a match to mate your pet
            </Text>
          </Box>

          <Box style={{ flex: 1 }} />

          <Box style={styles.headIconsContainer}>
            <CartIcon width={22} height={24} />
            <AlarmIcon width={22} height={24} />
          </Box>
        </Box>

        <Box style={styles.addPetContainer}>
          <Icon name="shape-circle-plus" color={theme.colors.secondary} size={30} />
          <Text variant="b2m" color="secondary">
            Add your pet
          </Text>
        </Box>

        <Text variant="h2" mb="l">
          Featured
        </Text>

        <Box>
          <FlatList
            data={pets}
            keyExtractor={(pet) => pet.id.toString()}
            renderItem={({ item }) => (
              <Box mb="l">
                <PetCard pet={item} />
              </Box>
            )}
          />
        </Box>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
