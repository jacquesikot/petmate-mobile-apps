import * as React from 'react';
import Svg, { SvgProps, G, Path, Circle, Defs, ClipPath } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Background(props: SvgProps) {
  return (
    <Svg width={414} height={896} viewBox="0 0 414 896" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Path fill="#fff" d="M0 0h414v896H0z" />
        <G>
          <Circle cx={110} cy={881.5} r={170} fill="#BA55FF" fillOpacity={0.027} />
        </G>
        <G>
          <Circle cx={71} cy={63.5} r={170} fill="#FCD884" fillOpacity={0.071} />
          <Circle cx={71} cy={63.5} r={169.5} stroke="#979797" />
        </G>
        <G>
          <Circle cx={307} cy={568.5} r={170} fill="#FEB9B9" fillOpacity={0.119} />
          <Circle cx={307} cy={568.5} r={169.5} stroke="#979797" />
        </G>
        <G>
          <Circle cx={43.5} cy={398.5} r={129.5} fill="#B9BCFE" fillOpacity={0.218} />
          <Circle cx={43.5} cy={398.5} r={129} stroke="#979797" />
        </G>
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h414v896H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Background;
