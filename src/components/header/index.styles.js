import styled from '@emotion/styled';
import { Container, media } from '../../styles/theme';

export const MainContainer = styled(Container)`
  top: 0px;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  justify-content: center;
  height: 10vh;
  z-index: 100;
`;

export const HeaderList = styled.div`
  font-weight: bold;
  font-family: 'MontserratThin';
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  width: 100%;

  ${media.mobile} {
    justify-content: center;
  }
`;

export const LeftWrapper = styled.div`
  font-family: 'BlackHanSans';
  font-size: 30px;
  padding-left: 100px;

  ${media.mobile} {
    padding-left: 0px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding-right: 150px;

  ${media.mobile} {
    display: none;
  }
`;
