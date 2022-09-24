// import React, {ComponentProps, ReactNode} from 'react';
// import {Image, ViewStyle} from 'react-native';
// import styled from 'styled-components/native';
// import {colors} from '../constants/color';

// export const Image = ({src}) => {

//   return (
//     <View>
//       <Image source={src}/>
//     </View>
//   );
// };

// const STYLE_BY_TYPE = {
//   primary: {
//     textColor: colors.white,
//     color: colors.orange,
//     disabledColor: colors.orange20,
//   },
//   // light: {
//   //   textColor: color.white,
//   //   color: color.orange,
//   //   disabledColor: color.orange20,
//   // },
//   gray: {
//     textColor: colors.black40,
//     color: colors.neural,
//     disabledColor: colors.neural,
//   },
// };

// const StyledButton = styled.TouchableOpacity<{
//   width: ViewStyle['width'];
//   height: ViewStyle['height'];
// }>`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   ${props => `width: ${props.width}px;`}
//   ${props => `height: ${props.height}px;`}
// `;

// type InnerTextProps = {
//   textColor: string;
// };

// const StyledText = styled.Text<InnerTextProps>`
//   ${props => `color: ${props.textColor};`}
// `;

// export default Button;
