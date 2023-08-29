import { keyframes } from '@emotion/react';

export const slideRightHandAnimation = keyframes`
    0% {
      right: calc(-100vw);
    }

    100% {
      right: -10px;
    }
`;
