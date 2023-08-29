import { keyframes } from '@emotion/react';
import styled from 'styled-components';

export const slideRightCardAnimation = keyframes`
    0% {
      right: calc(-80vw);
    }

    100% {
      right: 300px;
    }
`;

export const slideRightCardAnimationForMobile = keyframes`
    0% {
      right: calc(-80vw);
    }

    100% {
      right: 100px;
    }
`;
