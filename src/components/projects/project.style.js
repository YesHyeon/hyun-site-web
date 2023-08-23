import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 100%;
  margin-top: 100px;

  background-color: green;
`;

export const Header = styled.div`
  width: 100px;
  margin: 0 auto;
  font-family: BlackHanSans;
  font-size: 30px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  align-items: center;
  padding-inline: 100px;
  margin: 0 auto;
  gap: 30px;
  background-color: white;
  border-radius: 30px;
`;

export const Card = styled.div`
  width: 500px;
  height: 400px;
  background-color: black;
`;

export const CardDescriptionContainer = styled.div`
  width: calc(50% - 100px);
  display: flex;
  flex-direction: column;
`;

export const CardText = styled.div`
  height: 300px;
  background-color: red;
  font-family: 'NanumSquareR';
  font-size: 20px;
`;

export const CardLinkContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;
