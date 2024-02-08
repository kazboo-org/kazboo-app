import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";

export default MyFriendsContentIconFocused = ({ fill }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={54} height={54} fill="none">
      <G filter="url(#a)">
        <Circle cx={27} cy={23} r={20} fill="#ECA731" />
        <Circle cx={27} cy={23} r={21.5} stroke="#fff" strokeWidth={3} />
      </G>
      <Path
        fill="#fff"
        d="M16.111 15.75c0-2.15 1.167-4.159 3.111-5.259 1.896-1.1 4.278-1.1 6.223 0 1.895 1.1 3.11 3.108 3.11 5.26 0 2.2-1.215 4.207-3.11 5.307-1.945 1.1-4.327 1.1-6.223 0a6.067 6.067 0 0 1-3.11-5.307Zm-4.667 16.974c0-4.733 3.84-8.558 8.653-8.558h4.424c4.812 0 8.701 3.825 8.701 8.558 0 .766-.68 1.387-1.458 1.387h-18.91a1.4 1.4 0 0 1-1.41-1.386Zm29.605 1.387H34.34c.243-.43.438-.956.438-1.53V32.2c0-2.87-1.361-5.499-3.403-7.22.097 0 .195-.048.34-.048h2.966c4.326 0 7.875 3.49 7.875 7.746 0 .813-.681 1.434-1.507 1.434Zm-8.605-12.24a5.65 5.65 0 0 1-3.888-1.53c.972-1.291 1.555-2.869 1.555-4.59a7.39 7.39 0 0 0-.924-3.538c.924-.622 2.042-1.052 3.257-1.052 2.966 0 5.445 2.438 5.445 5.355 0 2.964-2.48 5.355-5.445 5.355Z"
      />
      <Defs></Defs>
    </Svg>
  );
};
