import styled from '@emotion/styled';
import backgroun1 from '../assets/images/banners/background1.png';
import { media } from '../styles/theme';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  white-space: pre-line;
  text-align: center;
  background-image: url(${backgroun1});
  background-size: 100vw;
  ${media.mobile} {
    background-size: 100vw 100vh;
  }
`;
