import styled from '@emotion/styled';

export const MainContainer = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #313131;
  background-color: white;
  z-index: auto;
`;

export const HeaderList = styled.div`
  font-weight: bold;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 30px;
`;
