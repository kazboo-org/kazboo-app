import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default UserProfileScreenIcon = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={40}
      fill="none"
      {...props}
    >
      <Path
        fill="#000"
        d="M17.5 20c-3.594 0-6.875-1.875-8.672-5-1.797-3.047-1.797-6.875 0-10 1.797-3.047 5.078-5 8.672-5 3.516 0 6.797 1.953 8.594 5 1.797 3.125 1.797 6.953 0 10-1.797 3.125-5.078 5-8.594 5Zm-3.594 3.75h7.11A13.97 13.97 0 0 1 35 37.734C35 38.984 33.906 40 32.656 40H2.266A2.267 2.267 0 0 1 0 37.734C0 30 6.172 23.75 13.906 23.75Z"
      />
    </Svg>
  );
};
