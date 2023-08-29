import styled, { DefaultTheme, css } from 'styled-components';

const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  // laptop: customMediaQuery(1440),
  tablet: customMediaQuery(1234),
  mobile: customMediaQuery(720),
};
