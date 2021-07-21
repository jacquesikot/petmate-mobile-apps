import * as React from 'react';
import Svg, { SvgProps, Mask, Path, G } from 'react-native-svg';

function PlusNavIcon({ width, color, ...props }: SvgProps) {
  return (
    <Svg
      width={width ? width : 28}
      height={width ? width : 28}
      viewBox="0 0 28 27"
      fill="none"
      {...props}>
      <Mask id="prefix__a" x={0} y={0} width={28} height={27}>
        <Path fillRule="evenodd" clipRule="evenodd" d="M.345 0h26.889v27H.343V0z" fill="#fff" />
      </Mask>
      <G
        mask="url(#prefix__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color ? color : '#E1E1E1'}>
        <Path d="M20.931 27H6.647C3.172 27 .345 24.161.345 20.672V6.328C.345 2.838 3.172 0 6.647 0H20.93c3.475 0 6.302 2.839 6.302 6.328v14.344c0 3.49-2.827 6.328-6.302 6.328zM6.647 2.11c-2.317 0-4.202 1.892-4.202 4.218v14.344c0 2.326 1.885 4.219 4.202 4.219H20.93c2.317 0 4.202-1.893 4.202-4.22V6.329c0-2.326-1.885-4.219-4.202-4.219H6.647z" />
        <Path d="M13.956 6.48c-.799 0-1.447.648-1.447 1.446v4.301H8.244a1.446 1.446 0 000 2.893h4.265v3.954a1.446 1.446 0 002.893 0V15.12h3.932a1.446 1.446 0 000-2.893h-3.932v-4.3c0-.8-.647-1.447-1.446-1.447z" />
      </G>
    </Svg>
  );
}

export default PlusNavIcon;
