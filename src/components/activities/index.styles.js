import styled from '@emotion/styled';
import { Container, media } from '../../styles/theme';

export const MainContainer = styled(Container)`
  align-self: center;
  box-sizing: border-box;
  height: 200rem;

  .activities-title {
    margin-top: 100px;
    font-size: 300px;
    position: sticky;
    top: 10px;
    display: flex;
    justify-content: center;
    transition: 3s;

    opacity: 1;

    color: black;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 50px;
  transition: 3s;
`;

export const DescriptionWrapper = styled.div`
  color: black;
  width: calc(100vw / 3);

  position: sticky;

  top: 350px;
  height: 50rem;
  transition: 1s;
  padding-inline: 30px;

  img {
    display: flex;
    width: calc(100vw / 4);
    height: 300px;
    border-radius: 30px;
    padding: 10px;
  }

  &:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    left: calc(100vw / 3);
  }
  &:nth-of-type(3) {
    display: flex;
    flex-direction: column;
    align-items: end;
    left: calc(100vw / 3 * 2);
  }

  .box {
    overflow: hidden;
    font-family: 'MontserratBold';
  }

  .title {
    font-size: 50px;
    font-family: 'MontserratBold';
    border-bottom: 2px solid white;
    margin-bottom: 10px;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(
      180deg,
      #ffb6ff,
      #b344ff 10%,
      #ae38ff 33%,
      #ffb6ff 45%,
      #ffe3ff 50%,
      #ffb6ff 66%,
      #b344ff
    );
    background-size: 100% 300%;

    animation: gradient 2s infinite ease-in;

    @keyframes gradient {
      from {
        background-position-y: 0%;
      }
      to {
        background-position-y: 100%;
      }
    }
  }

  .company {
    padding-top: 5px;
    font-size: 30px;
    font-family: 'MontserratBold';
    font-weight: bold;
  }

  .date,
  .team,
  .stack {
    font-family: 'MontserratSemibold';
  }

  .info {
  }

  .main {
    font-weight: bold;
    font-family: 'NanumSquareR';
    margin-bottom: 20px;
  }

  .sub {
    font-weight: 400;
    font-family: 'NanumSquareR';
    white-space: pre-line;
    padding-bottom: 10px;
  }
`;
