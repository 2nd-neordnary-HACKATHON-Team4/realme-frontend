import {Platform, StyleSheet, View} from 'react-native';
import color from '../constants/color';

const ShadowEffect = ({
  shadowColor = `${color.warm_gray_deep}`,
  opacity = 0.3,
  offset = {width: 3, height: 3},
  radius = 3,
  children,
  style,
}) => {
  return (
    <View style={[styles({shadowColor, opacity, offset, radius}).block, style]}>
      {children}
    </View>
  );
};

const styles = ({shadowColor, opacity, offset, radius}) =>
  StyleSheet.create({
    block: {
      ...Platform.select({
        ios: {
          shadowColor: `${shadowColor}`, //그림자색
          shadowOpacity: opacity, //그림자 투명도
          shadowOffset: {
            width: offset.width,
            height: offset.height,
          }, //그림자 위치
          shadowRadius: radius,
        },
        android: {
          //ANDROID
          elevation: 3,
        },
      }),
    },
  });

export default ShadowEffect;
