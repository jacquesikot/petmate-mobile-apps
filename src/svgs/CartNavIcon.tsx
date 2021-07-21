import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

// import theme from '../components/Theme';

function CartNavIcon({ width, height, color, ...props }: SvgProps) {
  return (
    <Svg
      width={width ? width : 31}
      height={height ? height : 28}
      viewBox="0 0 31 28"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.77 19.385a7.607 7.607 0 01-4.522-1.475l-4.755-3.502a1.406 1.406 0 01-.29-1.992 1.467 1.467 0 012.03-.285l4.756 3.503a4.712 4.712 0 005.558 0l4.758-3.503a1.467 1.467 0 012.03.285c.48.629.35 1.52-.29 1.992l-4.757 3.503a7.602 7.602 0 01-4.519 1.474zM31 18.262V9.738C31 4.368 27.137 0 22.389 0H8.61C3.863 0 0 4.368 0 9.738v8.524C0 23.632 3.863 28 8.611 28H22.39C27.137 28 31 23.632 31 18.262zM22.62 2.37c3.287 0 5.96 3.142 5.96 7.003v9.195c0 3.86-2.673 7.002-5.96 7.002H8.311c-3.288 0-5.962-3.141-5.962-7.002V9.372c0-3.861 2.674-7.003 5.962-7.003h14.307z"
        fill={color ? color : '#E1E1E1'}
      />
    </Svg>
  );
}

export default CartNavIcon;
