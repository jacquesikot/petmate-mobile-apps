import { StyleSheet } from 'react-native';

import theme from '../../components/Theme';

const CHECKBOX_MARGIN_RIGHT = 15;
const CHECKBOX_DEFAULT_SIZE = 23;

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    flex: 1,
    paddingHorizontal: theme.constants.screenPadding / 2,
    paddingTop: theme.constants.screenPadding,
    paddingBottom: theme.constants.screenPadding,
  },
  headerText: {
    marginTop: '10%',
    height: 60,
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginTop: 32,
    height: 200,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  registerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    marginTop: 17,
  },
  conditionsTextContainer: {
    marginLeft: CHECKBOX_MARGIN_RIGHT,
    flexDirection: 'row',
    width: theme.constants.screenWidth - (CHECKBOX_MARGIN_RIGHT + CHECKBOX_DEFAULT_SIZE),
    flexWrap: 'wrap',
  },
});

export default styles;
