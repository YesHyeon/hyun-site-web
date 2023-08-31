import styled from '@emotion/styled';
import backgroun1 from '../assets/images/banners/background1.png';
import { media } from '../styles/theme';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  white-space: pre-line;
  text-align: center;
  margin-block: 2rem;
  padding-top: 5rem;
  border-top: 1px solid white;
  background-size: 100vw;
  ${media.mobile} {
    background-size: 100vw 100vh;
  }
`;
