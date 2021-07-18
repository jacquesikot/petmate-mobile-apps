import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

import theme from '../components/Theme';

function Check({ width, height, ...props }: SvgProps) {
  return (
    <Svg
      width={width ? width : 13}
      height={height ? height : 11}
      viewBox="0 0 13 11"
      fill="none"
      {...props}>
      <Path
        d="M12.62 3.113L5.76 9.638a1.349 1.349 0 01-1.84 0L.381 6.269a1.196 1.196 0 010-1.75 1.348 1.348 0 011.84 0l2.62 2.493 5.938-5.65a1.349 1.349 0 011.84 0 1.196 1.196 0 010 1.751z"
        fill={theme.colors.primary}
      />
    </Svg>
  );
}

export default Check;
