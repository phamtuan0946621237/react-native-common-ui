
// import { RATIO_FONT_SIZE_APP } from '../../redux/actions/config';

import { StyleSheet } from 'react-native';

export function createStyles() {
  const styles = StyleSheet.create({
    alignRow : {
      flexDirection : 'row',
      alignItems : 'center'
    },
    header : {
        backgroundColor: 'white',
        shadowColor: "rgba(0, 0, 0, 0.08)",
        shadowOffset: {
          width: 0,
          height: 4
        },
  
        shadowRadius: 8,
        shadowOpacity: 1,
        elevation: 8
      },
      icon24: { width: 24, height: 24 },
  });
  return styles;
}
