import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";

export default IFollowContentIcon = ({ fill }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={54} height={54} fill="none">
      <G filter="url(#a)">
        <Circle cx={27} cy={23} r={20} fill="#ECA731" />
        <Circle cx={27} cy={23} r={21.5} stroke="#fff" strokeWidth={3} />
      </G>
      <Path
        fill="#fff"
        d="m28.164 8.797 3.502 7.166 7.705 1.132a1.757 1.757 0 0 1 1.4 1.185 1.6 1.6 0 0 1-.43 1.724l-5.604 5.55 1.347 7.866a1.693 1.693 0 0 1-.7 1.67c-.54.432-1.24.432-1.832.162l-6.897-3.718-6.95 3.718c-.54.27-1.24.27-1.778-.162a1.692 1.692 0 0 1-.7-1.67l1.292-7.866-5.603-5.55c-.431-.43-.593-1.131-.431-1.724a1.757 1.757 0 0 1 1.4-1.185l7.76-1.132 3.448-7.166c.269-.592.862-.97 1.562-.97.647 0 1.24.378 1.509.97Z"
      />
      <Defs></Defs>
    </Svg>
  );
};
