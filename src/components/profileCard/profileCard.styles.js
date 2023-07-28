import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 150px);
  height: calc(100vh - 100px);
  margin: 0 auto;

  align-items: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  z-index: 100;
`;

export const Header = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const CloseButton = styled.div`
  width: 10px;
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.div`
  font-family: heebo;
  font-size: 20px;
  margin-left: 100px;
  border-radius: 30px;
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 320px;
  border-radius: 210px;
`;

export const Profile = styled.img`
  width: 300px;
  height: 320px;
  border-radius: 210px;
`;
