import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

function Logo({ width, height, ...props }: SvgProps) {
  return (
    <Svg
      width={width ? width : 668}
      height={height ? height : 200}
      viewBox="0 0 668 200"
      fill="none"
      {...props}>
      <Circle cx={115.663} cy={84.337} r={84.337} fill="#155157" />
      <Path
        d="M0 105.976c0-6.628 5.373-12 12-12h94.024V188c0 6.627-5.372 12-12 12H0v-94.024z"
        fill="#F5B04C"
      />
      <Path
        d="M106.024 59.012a6 6 0 016-6h34.964v34.964a6 6 0 01-6 6h-34.964V59.012z"
        fill="#FFFCF6"
      />
      <Path
        d="M262.29 67c5.2 0 9.833 1.133 13.9 3.4 4.133 2.267 7.366 5.467 9.7 9.6 2.333 4.133 3.5 8.9 3.5 14.3s-1.167 10.2-3.5 14.4c-2.334 4.133-5.567 7.333-9.7 9.6-4.067 2.267-8.7 3.4-13.9 3.4-7.2 0-12.9-2.4-17.1-7.2v25.9h-12.5V67.6h11.9v7a19.412 19.412 0 017.6-5.7c3.066-1.267 6.433-1.9 10.1-1.9zm-1.4 44c4.6 0 8.366-1.533 11.3-4.6 3-3.067 4.5-7.1 4.5-12.1s-1.5-9.033-4.5-12.1c-2.934-3.067-6.7-4.6-11.3-4.6-3 0-5.7.7-8.1 2.1-2.4 1.333-4.3 3.267-5.7 5.8-1.4 2.533-2.1 5.467-2.1 8.8 0 3.333.7 6.267 2.1 8.8 1.4 2.533 3.3 4.5 5.7 5.9 2.4 1.333 5.1 2 8.1 2zm90.726-16.4c0 .867-.067 2.1-.2 3.7h-41.9c.733 3.933 2.633 7.067 5.7 9.4 3.133 2.267 7 3.4 11.6 3.4 5.866 0 10.7-1.933 14.5-5.8l6.7 7.7c-2.4 2.867-5.434 5.033-9.1 6.5-3.667 1.467-7.8 2.2-12.4 2.2-5.867 0-11.034-1.167-15.5-3.5-4.467-2.333-7.934-5.567-10.4-9.7-2.4-4.2-3.6-8.933-3.6-14.2 0-5.2 1.166-9.867 3.5-14 2.4-4.2 5.7-7.467 9.9-9.8 4.2-2.333 8.933-3.5 14.2-3.5 5.2 0 9.833 1.167 13.9 3.5 4.133 2.267 7.333 5.5 9.6 9.7 2.333 4.133 3.5 8.933 3.5 14.4zm-27-17.6c-4 0-7.4 1.2-10.2 3.6-2.734 2.333-4.4 5.467-5 9.4h30.3c-.534-3.867-2.167-7-4.9-9.4-2.734-2.4-6.134-3.6-10.2-3.6zm71.278 41.1c-1.466 1.2-3.266 2.1-5.4 2.7-2.066.6-4.266.9-6.6.9-5.866 0-10.4-1.533-13.6-4.6-3.2-3.067-4.8-7.533-4.8-13.4V78h-8.8V68h8.8V55.8h12.5V68h14.3v10h-14.3v25.4c0 2.6.634 4.6 1.9 6 1.267 1.333 3.1 2 5.5 2 2.8 0 5.134-.733 7-2.2l3.5 8.9zM473.748 67c6.734 0 12.067 1.967 16 5.9 3.934 3.867 5.9 9.7 5.9 17.5V121h-12.5V92c0-4.667-1.033-8.167-3.1-10.5-2.066-2.4-5.033-3.6-8.9-3.6-4.2 0-7.566 1.4-10.1 4.2-2.533 2.733-3.8 6.667-3.8 11.8V121h-12.5V92c0-4.667-1.033-8.167-3.1-10.5-2.066-2.4-5.033-3.6-8.9-3.6-4.266 0-7.666 1.367-10.2 4.1-2.466 2.733-3.7 6.7-3.7 11.9V121h-12.5V67.6h11.9v6.8c2-2.4 4.5-4.233 7.5-5.5 3-1.267 6.334-1.9 10-1.9 4 0 7.534.767 10.6 2.3 3.134 1.467 5.6 3.667 7.4 6.6 2.2-2.8 5.034-4.967 8.5-6.5 3.467-1.6 7.3-2.4 11.5-2.4zm58.445 0c7.867 0 13.867 1.9 18 5.7 4.2 3.733 6.3 9.4 6.3 17V121h-11.8v-6.5c-1.533 2.333-3.733 4.133-6.6 5.4-2.8 1.2-6.2 1.8-10.2 1.8-4 0-7.5-.667-10.5-2-3-1.4-5.333-3.3-7-5.7-1.6-2.467-2.4-5.233-2.4-8.3 0-4.8 1.767-8.633 5.3-11.5 3.6-2.933 9.234-4.4 16.9-4.4h13.8V89c0-3.733-1.133-6.6-3.4-8.6-2.2-2-5.5-3-9.9-3-3 0-5.966.467-8.9 1.4-2.866.933-5.3 2.233-7.3 3.9l-4.9-9.1c2.8-2.133 6.167-3.767 10.1-4.9 3.934-1.133 8.1-1.7 12.5-1.7zm-1.7 45.6c3.134 0 5.9-.7 8.3-2.1 2.467-1.467 4.2-3.533 5.2-6.2v-6.2h-12.9c-7.2 0-10.8 2.367-10.8 7.1 0 2.267.9 4.067 2.7 5.4 1.8 1.333 4.3 2 7.5 2zm74.314 5.5c-1.467 1.2-3.267 2.1-5.4 2.7-2.067.6-4.267.9-6.6.9-5.867 0-10.4-1.533-13.6-4.6-3.2-3.067-4.8-7.533-4.8-13.4V78h-8.8V68h8.8V55.8h12.5V68h14.3v10h-14.3v25.4c0 2.6.633 4.6 1.9 6 1.267 1.333 3.1 2 5.5 2 2.8 0 5.133-.733 7-2.2l3.5 8.9zm58.896-23.5c0 .867-.066 2.1-.2 3.7h-41.9c.734 3.933 2.634 7.067 5.7 9.4 3.134 2.267 7 3.4 11.6 3.4 5.867 0 10.7-1.933 14.5-5.8l6.7 7.7c-2.4 2.867-5.433 5.033-9.1 6.5-3.666 1.467-7.8 2.2-12.4 2.2-5.866 0-11.033-1.167-15.5-3.5-4.466-2.333-7.933-5.567-10.4-9.7-2.4-4.2-3.6-8.933-3.6-14.2 0-5.2 1.167-9.867 3.5-14 2.4-4.2 5.7-7.467 9.9-9.8 4.2-2.333 8.934-3.5 14.2-3.5 5.2 0 9.834 1.167 13.9 3.5 4.134 2.267 7.334 5.5 9.6 9.7 2.334 4.133 3.5 8.933 3.5 14.4zm-27-17.6c-4 0-7.4 1.2-10.2 3.6-2.733 2.333-4.4 5.467-5 9.4h30.3c-.533-3.867-2.166-7-4.9-9.4-2.733-2.4-6.133-3.6-10.2-3.6z"
        fill="#155157"
      />
    </Svg>
  );
}

export default Logo;