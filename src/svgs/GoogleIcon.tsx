import * as React from 'react';
import Svg, { SvgProps, Path, Defs, Pattern, Use, Image } from 'react-native-svg';

function GoogleIcon({ width, height, ...props }: SvgProps) {
  return (
    <Svg
      width={width ? width : 17}
      height={height ? height : 14}
      viewBox="0 0 17 14"
      fill="none"
      {...props}>
      <Path fill="url(#prefix__pattern0)" d="M0 .419h17V13.58H0z" />
      <Defs>
        <Pattern id="prefix__pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#prefix__image0" transform="scale(.02941 .03846)" />
        </Pattern>
        <Image id="prefix__image0" width={34} height={26} />
      </Defs>
    </Svg>
  );
}

export default GoogleIcon;
