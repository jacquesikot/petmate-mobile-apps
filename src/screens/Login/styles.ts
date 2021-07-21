import { StyleSheet } from 'react-native';

import theme from '../../components/Theme';

const styles = StyleSheet.create({
  container: {},
  forgotContainer: {
    width: '33%',
    alignSelf: 'flex-end',
  },
  backgroundImage: {
    flex: 1,
    paddingHorizontal: theme.constants.screenPadding / 2,
    paddingTop: theme.constants.screenPadding,
    paddingBottom: 10,
  },
  headerText: {
    marginTop: '10%',
    height: 60,
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginTop: 32,
    height: 130,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  horizontalLine: {
    width: theme.constants.screenWidth,
    height: 2,
    backgroundColor: theme.colors.white,
    marginTop: 22,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  registerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default styles;
