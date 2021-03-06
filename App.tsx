/* eslint-disable @typescript-eslint/no-unsafe-return */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import Toast from 'react-native-toast-message';

import LoadAssets from './src/utils/LoadAssets';
import theme from './src/components/Theme';
import fonts from './src/utils/fonts';
import assets from './src/utils/assets';
import AppNav from './src/navigation/AppNav';

export default function App() {
  return (
    <LoadAssets fonts={fonts} assets={assets}>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" />
        <AppNav />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </ThemeProvider>
    </LoadAssets>
  );
}
