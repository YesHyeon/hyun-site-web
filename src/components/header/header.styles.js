import styled from '@emotion/styled';

export const MainContainer = styled.header`
  top: 0px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10vh;
  background-color: white;
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
`;

export const LeftWrapper = styled.div`
  font-family: 'BlackHanSans';
  font-size: 30px;
  padding-left: 100px;
`;

export const RightWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding-right: 150px;
`;
