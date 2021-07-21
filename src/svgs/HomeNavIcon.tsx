import * as React from 'react';
import Svg, { SvgProps, Mask, Path, G, Defs, LinearGradient, Stop } from 'react-native-svg';

import theme from '../components/Theme';

function HomeNavIcon({ width, color, ...props }: SvgProps) {
  return (
    <Svg
      width={width ? width : 28}
      height={width ? width : 28}
      viewBox="0 0 28 28"
      fill="none"
      {...props}>
      <Mask id="prefix__a" x={0} y={0} width={28} height={28}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M0 .002h28v27.994H0V.002z" fill="#fff" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.98 1.342l7.437 5.673A6.6 6.6 0 0128 12.233v9.203a6.57 6.57 0 01-6.563 6.562h-1.571A3.998 3.998 0 0116.4 30h-4a3.998 3.998 0 01-3.466-2.002H6.563A6.57 6.57 0 010 21.436v-9.203C0 10.2.966 8.25 2.583 7.015l7.437-5.673a6.578 6.578 0 017.96 0zm-5.67 26.656l.09.002h4c.03 0 .06 0 .09-.002h-4.18zM18.4 25.6h-8v-6.8a2 2 0 012-2h4a2 2 0 012 2v6.8zm2 0v-6.8a4 4 0 00-4-4h-4a4 4 0 00-4 4v6.8H6.696A4.301 4.301 0 012.4 21.303v-9.037c0-1.332.632-2.61 1.69-3.417l7.305-5.571A4.29 4.29 0 0114 2.4c.92 0 1.838.293 2.605.878l7.304 5.571a4.322 4.322 0 011.691 3.417v9.037a4.301 4.301 0 01-4.296 4.297H20.4z"
          fill="url(#prefix__paint0_linear)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={-8.785}
          y1={8.528}
          x2={8.849}
          y2={37.481}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={color ? color : theme.colors.primary} />
          <Stop offset={1} stopColor={color ? color : theme.colors.primary} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default HomeNavIcon;
