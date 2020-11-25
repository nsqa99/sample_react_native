import React from 'react';

import {Text} from 'react-native';
import {ms} from 'react-native-size-matters';

import {MyFonts, MyColors} from '../styles/theme';
/**
 * define props
 * margin
 * padding
 * bgColor => background color for text
 * color => color of text
 * size => fontSize
 * bold => if text is bold
 * define heading size
 * vv.....
 */

const TextView = ({
  flex,
  margin,
  marginHorizontal,
  marginVertical,
  padding,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  bgColor,
  color,
  gray,
  white,
  lower,
  upper,
  capital,
  size,
  fontFamily,
  bold,
  center,
  lineHeight,
  borderRadius,
  italic,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  s1,
  s2,
  s3,
  b1,
  b2,
  b3,
  b4,
  b5,
  style,
  children,
  ...props
}) => {
  const styleComponet = [
    flex && {flex: 1},
    {fontSize: ms(16), fontFamily: MyFonts.header, color: '#0A0A16'},
    // // header
    (h1 || h2 || h3 || h4 || h5) && {fontFamily: MyFonts.header},
    h1 && {fontSize: ms(28), lineHeight: ms(30), fontWeight: '700'},
    h2 && {fontSize: ms(20), lineHeight: ms(26), fontWeight: '700'},
    h3 && {fontSize: ms(18), lineHeight: ms(24), fontWeight: '700'},
    h4 && {fontSize: ms(16), lineHeight: ms(24), fontWeight: '700'},
    h5 && {fontSize: ms(14), lineHeight: ms(20), fontWeight: '700'},
    h6 && {fontSize: ms(12), lineHeight: ms(14), fontWeight: '700'},
    h7 && {fontSize: ms(11), lineHeight: ms(13), fontWeight: '700'},
    // // sub-header
    (s1 || s2 || s3) && {fontFamily: MyFonts.sub},
    s1 && {fontSize: ms(10), lineHeight: ms(12), fontWeight: '500'},
    // // body
    (b1 || b2 || b3) && {fontFamily: MyFonts.body},
    b1 && {fontSize: ms(12), lineHeight: ms(16), fontWeight: '400'},
    margin && {margin: ms(margin)},
    marginHorizontal && {marginHorizontal: ms(marginHorizontal)},
    marginVertical && {marginVertical: ms(marginVertical)},
    padding && {padding: ms(padding)},
    paddingHorizontal && {paddingHorizontal: ms(paddingHorizontal)},
    paddingVertical && {paddingVertical: ms(paddingVertical)},
    paddingTop && {paddingTop: ms(paddingTop)},
    borderRadius && {borderRadius, overflow: 'hidden'},
    lineHeight && {lineHeight: ms(lineHeight)},
    bgColor && {backgroundColor: bgColor},
    color && {color},
    italic && {fontStyle: 'italic'},
    gray && {color: MyColors.gray},
    white && {color: MyColors.white},
    size && {fontSize: ms(size)},
    fontFamily && {fontFamily},
    center && {textAlign: 'center'},
    lower && {textTransform: 'lowercase'},
    upper && {textTransform: 'uppercase'},
    capital && {textTransform: 'capitalize'},
    style,
  ];
  Text.defaultProps = Text.defaultProps || {};
  // Ignore dynamic type scaling on iOS
  Text.defaultProps.allowFontScaling = false;
  return (
    <Text style={styleComponet} {...props}>
      {children}
    </Text>
  );
};
const TextBase = ({children, ...props}) => {
  Text.defaultProps = Text.defaultProps || {};
  // Ignore dynamic type scaling on iOS & android
  Text.defaultProps.allowFontScaling = false;

  return <Text {...props}>{children}</Text>;
};

export {TextBase};
export default TextView;
