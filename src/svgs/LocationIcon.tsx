import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function LocationIcon({ width, height, ...props }: SvgProps) {
  return (
    <Svg
      width={width ? width : 9}
      height={height ? height : 11}
      viewBox="0 0 9 13"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5.126C.003 2.848 2.016 1.003 4.5 1c2.484.003 4.497 1.848 4.5 4.126 0 2.907-3.977 6.586-4.146 6.741a.538.538 0 01-.708 0C3.977 11.713 0 8.034 0 5.127zm1 0c0 2.065 2.547 4.8 3.5 5.75.953-.95 3.5-3.685 3.5-5.75 0-1.773-1.567-3.21-3.5-3.21S1 3.354 1 5.127z"
        fill="#C5C4C4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4.834h-.827l2.301-1.86 2.3 1.86H6v2.171H3v-2.17z"
        fill="#C5C4C4"
      />
    </Svg>
  );
}

export default LocationIcon;
