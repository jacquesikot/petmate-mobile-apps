import * as React from 'react';
import Svg, { SvgProps, Mask, Path, G } from 'react-native-svg';

function ProfileNavIcon({ width, height, color, ...props }: SvgProps) {
  return (
    <Svg
      width={width ? width : 23}
      height={height ? height : 28}
      viewBox="0 0 23 28"
      fill="none"
      {...props}>
      <Mask id="prefix__a" x={0} y={15} width={23} height={13}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M0 15.2h23v12H0v-12z" fill="#fff" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.832 27.2a1.178 1.178 0 01-1.167-1.188c0-4.651-3.719-8.436-8.29-8.436h-1.75c-4.571 0-8.29 3.785-8.29 8.436 0 .656-.523 1.188-1.167 1.188A1.178 1.178 0 010 26.012C0 20.05 4.766 15.2 10.624 15.2h1.752C18.234 15.2 23 20.05 23 26.012c0 .656-.523 1.188-1.168 1.188z"
          fill={color ? color : '#E1E1E1'}
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.103 14.4c-3.935 0-7.138-3.23-7.138-7.2S7.168 0 11.103 0c3.936 0 7.138 3.23 7.138 7.2s-3.202 7.2-7.138 7.2zm0-12c-2.624 0-4.758 2.153-4.758 4.8S8.479 12 11.103 12s4.759-2.153 4.759-4.8-2.135-4.8-4.759-4.8z"
        fill={color ? color : '#E1E1E1'}
      />
    </Svg>
  );
}

export default ProfileNavIcon;
