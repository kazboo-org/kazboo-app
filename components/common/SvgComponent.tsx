import * as React from "react";
import Svg, { Path } from "react-native-svg";

/* SVGR has dropped some elements not supported by react-native-svg: title */

export const ThreeDots = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M4 20.5c1.25 0 2.375.688 3 1.75.625 1.125.625 2.438 0 3.5-.625 1.125-1.75 1.75-3 1.75-1.313 0-2.438-.625-3.063-1.75-.625-1.063-.625-2.375 0-3.5A3.518 3.518 0 0 1 4 20.5Zm0-10c1.25 0 2.375.688 3 1.75.625 1.125.625 2.438 0 3.5-.625 1.125-1.75 1.75-3 1.75-1.313 0-2.438-.625-3.063-1.75-.625-1.063-.625-2.375 0-3.5A3.518 3.518 0 0 1 4 10.5ZM7.5 4a3.518 3.518 0 0 1-1.75 3.063c-1.125.625-2.438.625-3.5 0C1.125 6.438.5 5.313.5 4c0-1.25.625-2.375 1.75-3C3.313.375 4.625.375 5.75 1c1.063.625 1.75 1.75 1.75 3Z"
    />
  </Svg>
);

export const PaperFly = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M39.906 1.469a2.454 2.454 0 0 1 1.016 2.422l-5 32.5c-.078.78-.547 1.406-1.25 1.797a2.4 2.4 0 0 1-2.188.156l-9.297-3.907-5.39 5.782a2.42 2.42 0 0 1-2.735.625c-.937-.313-1.562-1.25-1.562-2.344v-6.484c0-.313.078-.625.313-.86L26.858 16.86a1.226 1.226 0 0 0 0-1.718 1.226 1.226 0 0 0-1.718 0L9.28 29.203l-6.953-3.437C1.547 25.375 1 24.516 1 23.578c-.078-.86.39-1.719 1.25-2.187l35-20c.781-.47 1.875-.47 2.656.078Z"
    />
  </Svg>
);

export const UserProfile = (props: any) => (
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

export const Mail = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M3.75 0h32.5C38.281 0 40 1.719 40 3.75c0 1.25-.625 2.344-1.563 3.047L21.485 19.53c-.937.703-2.109.703-3.047 0L1.485 6.797C.547 6.094 0 5 0 3.75A3.75 3.75 0 0 1 3.75 0ZM0 8.75l16.953 12.813a5.04 5.04 0 0 0 6.016 0L40 8.75V25c0 2.813-2.266 5-5 5H5c-2.813 0-5-2.188-5-5V8.75Z"
    />
  </Svg>
);

export const Attention = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={36}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M1.328 20.813c-1.016-1.72-1.016-3.829 0-5.625L8.203 3.312A5.544 5.544 0 0 1 13.047.5h13.828c2.031 0 3.828 1.016 4.844 2.813l6.875 11.874c1.015 1.797 1.015 3.907 0 5.626l-6.875 11.953c-1.016 1.797-2.813 2.812-4.844 2.812H13.047a5.544 5.544 0 0 1-4.844-2.812L1.328 20.813ZM20 8c-1.094 0-1.875.86-1.875 1.875v8.75c0 1.094.781 1.875 1.875 1.875 1.016 0 1.875-.781 1.875-1.875v-8.75C21.875 8.859 21.015 8 20 8Zm2.5 17.5c0-1.328-1.172-2.5-2.5-2.5-1.406 0-2.5 1.172-2.5 2.5 0 1.406 1.094 2.5 2.5 2.5 1.328 0 2.5-1.094 2.5-2.5Z"
    />
  </Svg>
);

export const HeartPlusIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={39}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M3.672 21.568C1.328 19.381 0 16.256 0 12.975v-.391C0 7.115 3.906 2.428 9.297 1.568c3.594-.625 7.187.547 9.765 3.047l.938.938.938-.938c2.5-2.5 6.171-3.672 9.687-3.047C36.015 2.428 40 7.115 40 12.584v.39c0 .547-.078 1.016-.156 1.563a13.253 13.253 0 0 0-6.094-1.484A13.72 13.72 0 0 0 20 26.803c0 2.89.86 5.547 2.344 7.734l-.235.235c-.547.546-1.328.78-2.109.78-.86 0-1.64-.234-2.188-.78L3.672 21.568ZM33.75 38.053c-4.063 0-7.734-2.11-9.766-5.625-2.03-3.438-2.03-7.735 0-11.25 2.032-3.438 5.703-5.625 9.766-5.625 3.984 0 7.656 2.187 9.688 5.625 2.03 3.515 2.03 7.812 0 11.25-2.032 3.515-5.704 5.625-9.688 5.625ZM35 21.803c0-.625-.625-1.25-1.25-1.25-.703 0-1.25.625-1.25 1.25v3.75h-3.75c-.703 0-1.25.625-1.25 1.25 0 .703.547 1.25 1.25 1.25h3.75v3.75c0 .703.547 1.25 1.25 1.25.625 0 1.25-.547 1.25-1.25v-3.75h3.75c.625 0 1.25-.547 1.25-1.25 0-.625-.625-1.25-1.25-1.25H35v-3.75Z"
    />
  </Svg>
);

export const Acorn = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={39}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M20.469 1.39c.86.626 1.015 1.798.39 2.657l-.39.469c-.313.468-.625 1.015-.782 1.484H27.5c4.14 0 7.5 3.36 7.5 7.5 0 1.406-1.172 2.5-2.5 2.5h-30A2.468 2.468 0 0 1 0 13.5C0 9.36 3.36 6 7.5 6h8.281c.313-1.328.86-2.578 1.719-3.75l.313-.469c.625-.86 1.796-1.015 2.656-.39ZM16.64 38.267C6.094 34.28 3.75 24.672 3.75 18.5h27.5c0 6.172-2.422 15.781-12.969 19.766a2.929 2.929 0 0 1-1.64 0Z"
    />
  </Svg>
);
