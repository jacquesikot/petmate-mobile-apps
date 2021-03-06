import { StyleSheet } from 'react-native';

import theme from '../../components/Theme';

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    flex: 1,
    paddingHorizontal: theme.constants.screenPadding / 2,
    paddingTop: theme.constants.screenPadding,
    paddingBottom: theme.constants.screenPadding,
  },
  headerText: {
    marginTop: '20%',
    height: 60,
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginTop: 32,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default styles;
