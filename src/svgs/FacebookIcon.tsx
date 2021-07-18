import * as React from 'react';
import Svg, { SvgProps, Path, Defs, Pattern, Use, Image } from 'react-native-svg';

function FacebookIcon({ width, ...props }: SvgProps) {
  return (
    <Svg
      width={width ? width : 17}
      height={width ? width : 17}
      viewBox="0 0 17 17"
      fill="none"
      {...props}>
      <Path fill="url(#prefix__pattern0)" d="M0 0h17v17H0z" />
      <Defs>
        <Pattern id="prefix__pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#prefix__image0" transform="scale(.02941)" />
        </Pattern>
        <Image id="prefix__image0" width={34} height={34} />
      </Defs>
    </Svg>
  );
}

export default FacebookIcon;
