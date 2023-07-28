import { keyframes } from '@emotion/react';

export const floatAnimation = keyframes`
    0% {
      box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.7);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 10px 25px 3px 0px rgba(0, 0, 0, 0.3);
      transform: translatey(-20px);
    }
    100% {
      box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.7);
      transform: translatey(0px);
    }
`;
