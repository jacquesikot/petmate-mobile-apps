import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

import theme, { Box } from '../components/Theme';
import { AppNavParamList } from '../types/navigation.types';
import { Home, Shop, AddPet, Consult, Profile } from '../screens';
import HomeNavIcon from '../svgs/HomeNavIcon';
import CartNavIcon from '../svgs/CartNavIcon';
import PlusNavIcon from '../svgs/PlusNavIcon';
import ConsultNavIcon from '../svgs/ConsultNavIcon';
import ProfileNavIcon from '../svgs/ProfileNavIcon';

const styles = StyleSheet.create({
  tabBarBox: {
    width: 50,
    height: 52,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const AppStack = createBottomTabNavigator<AppNavParamList>();

const AppNav = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppStack.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          showLabel: false,
          activeTintColor: theme.colors.primary,
          inactiveTintColor: theme.colors.light,
          style: {
            height: 70,
          },
        }}>
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, focused }) => {
              return (
                <Box backgroundColor={focused ? 'lightYellow' : 'white'} style={styles.tabBarBox}>
                  <HomeNavIcon color={color} />
                </Box>
              );
            },
          }}
        />

        <AppStack.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarIcon: ({ color, focused }) => {
              return (
                <Box backgroundColor={focused ? 'lightYellow' : 'white'} style={styles.tabBarBox}>
                  <CartNavIcon color={color} />
                </Box>
              );
            },
          }}
        />

        <AppStack.Screen
          name="AddPet"
          component={AddPet}
          options={{
            tabBarIcon: ({ color, focused }) => {
              return (
                <Box backgroundColor={focused ? 'lightYellow' : 'white'} style={styles.tabBarBox}>
                  <PlusNavIcon color={color} />
                </Box>
              );
            },
          }}
        />

        <AppStack.Screen
          name="Consult"
          component={Consult}
          options={{
            tabBarIcon: ({ color, focused }) => {
              return (
                <Box backgroundColor={focused ? 'lightYellow' : 'white'} style={styles.tabBarBox}>
                  <ConsultNavIcon color={color} />
                </Box>
              );
            },
          }}
        />

        <AppStack.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, focused }) => {
              return (
                <Box backgroundColor={focused ? 'lightYellow' : 'white'} style={styles.tabBarBox}>
                  <ProfileNavIcon color={color} />
                </Box>
              );
            },
          }}
        />
      </AppStack.Navigator>
    </SafeAreaView>
  );
};

export default AppNav;
