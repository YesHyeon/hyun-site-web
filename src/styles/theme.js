import styled from '@emotion/styled';

const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  // laptop: customMediaQuery(1440),
  tablet: customMediaQuery(1234),
  mobile: customMediaQuery(720),
};

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;
