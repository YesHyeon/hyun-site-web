import styled from '@emotion/styled';

export const MainContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  height: 100vh;
  z-index: 100;

  .title {
    font-size: 200px;
  }

  .list {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export const HeaderList = styled.div``;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
