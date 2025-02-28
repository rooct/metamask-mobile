import { StyleSheet } from 'react-native';

import { Theme } from '../../../../../../util/theme/models';
import { fontStyles } from '../../../../../../styles/common';

const styleSheet = (params: { theme: Theme }) => {
  const { theme } = params;

  return StyleSheet.create({
    titleContainer: {
      marginVertical: 24,
    },
    title: {
      color: theme.colors.text.default,
      ...fontStyles.bold,
      fontSize: 18,
      fontWeight: '700',
      textAlign: 'center',
    },
    subTitle: {
      color: theme.colors.text.default,
      ...fontStyles.normal,
      fontSize: 14,
      fontWeight: '400',
      marginTop: 8,
      textAlign: 'center',
    },
  });
};

export default styleSheet;
