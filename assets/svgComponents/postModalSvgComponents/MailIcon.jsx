import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default MailIcon = ({ fill }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={30} fill="none">
      <Path
        fill={fill}
        d="M3.75 0h32.5C38.281 0 40 1.719 40 3.75c0 1.25-.625 2.344-1.563 3.047L21.485 19.53c-.937.703-2.109.703-3.047 0L1.485 6.797C.547 6.094 0 5 0 3.75A3.75 3.75 0 0 1 3.75 0ZM0 8.75l16.953 12.813a5.04 5.04 0 0 0 6.016 0L40 8.75V25c0 2.813-2.266 5-5 5H5c-2.813 0-5-2.188-5-5V8.75Z"
      />
    </Svg>
  );
};
