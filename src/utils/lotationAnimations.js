import { keyframes } from '@emotion/react';

export const lotation = keyframes`
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(-180deg);
    }
`;

export const lotationBack = keyframes`
    0% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(0deg);
    }
`;
