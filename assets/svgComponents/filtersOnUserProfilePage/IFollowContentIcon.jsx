import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";

export default IFollowContentIcon = ({ fill }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={41} height={41} fill="none">
      <G filter="url(#a)">
        <Circle cx={20.5} cy={16.5} r={13.5} fill="#ECA731" />
        <Circle cx={20.5} cy={16.5} r={15} stroke="#fff" strokeWidth={3} />
      </G>
      <Path
        fill="#fff"
        d="m21.285 6.913 2.364 4.837 5.201.764c.436.073.8.364.946.8.145.4.036.873-.291 1.164l-3.783 3.746.91 5.31c.072.436-.11.873-.473 1.127-.364.291-.837.291-1.237.11l-4.655-2.51-4.691 2.51a1.116 1.116 0 0 1-1.2-.11 1.142 1.142 0 0 1-.473-1.127l.872-5.31-3.782-3.746c-.29-.291-.4-.764-.29-1.164.145-.436.508-.727.945-.8l5.237-.764 2.327-4.837c.182-.4.582-.654 1.055-.654.436 0 .837.254 1.018.654Z"
      />
      <Defs></Defs>
    </Svg>
  );
};
