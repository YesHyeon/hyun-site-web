import styled from '@emotion/styled';

export const MainContainer = styled.div`
  width: 100%;
  height: 150rem;
  position: sticky;
  top: 10rem;
  align-self: center;

  padding: 0 4.2rem;
  box-sizing: border-box;
  max-width: 144rem;
`;

export const DescriptionContainer = styled.div`
  display: block;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-right: 20px;
`;

export const DescriptionWrapper = styled.div`
  color: black;
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 100px;
  text-align: start;
  transition: 10s;

  &:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30%;
  }
  &:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    margin-left: 30%;
    padding-top: 30px;
  }
  /* &:nth-child(3) {
    display: flex;
    flex-direction: column;
    align-items: end;
  } */

  .box {
    height: 300px;
  }

  .title {
    font-size: 30px;
    height: 30px;
    font-family: 'MontserratBold';
    border-bottom: 2px solid white;
    padding-bottom: 3px;
    box-shadow: inset 0 -20px 0 #ffff6f;

    transition: 2s;
  }

  .company {
    padding-top: 5px;
    font-size: 30px;
    font-family: 'NanumSquareR';
  }

  .info {
    white-space: pre-line;
    height: 270px;
  }
`;

export const DescriptionTitle = styled.text`
  font-size: 30px;
  font-family: 'MontserratBold';
  border-bottom: 2px solid white;
  padding-bottom: 3px;
  box-shadow: inset 0 -20px 0 #ffff6f;

  transition: 2s;
`;

export const DescriptionText = styled.div`
  padding-top: 5px;
  font-size: 15px;
  font-family: 'NanumSquareR';
`;
