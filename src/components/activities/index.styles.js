import styled from '@emotion/styled';

export const MainContainer = styled.div`
  width: 100vw;
  /* height: 135rem; */
  top: 10rem;
  align-self: center;
  box-sizing: border-box;

  .activities-title {
    margin-top: 100px;
    font-size: 300px;
    position: sticky;
    top: 10px;
    display: flex;
    justify-content: center;
    /* font-family: 'BlackHansans'; */
    transition: 3s;

    opacity: 1;

    color: black;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* height: 150rem; */
  padding-top: 50px;
  transition: 3s;
  width: 100vw;
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

  &:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    left: calc(100vw / 3);
  }
  &:nth-child(3) {
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
    /* animation: gradient 1s ease infinite; */

    /* @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    } */
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
