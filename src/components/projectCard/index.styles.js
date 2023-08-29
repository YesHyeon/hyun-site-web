import styled from '@emotion/styled';
import { media } from '../../styles/theme';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export const Gallery = styled(ImageGallery)`
  ${media.mobile} {
    .image-gallery-thumbnails-wrapper.thumbnails-swipe-horizontal {
      display: none;
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  position: fixed;
  top: 100px;
  left: 0;
  z-index: 100;

  flex-shrink: 1, 1, 1;

  flex-direction: column;
  align-items: center;

  width: calc(100vw - 200px);
  height: 80vh;
  margin: 0 auto;
  left: 0px;
  right: 0px;

  background-color: white;
  border: 1px solid black;
  border-radius: 10px;

  overflow-y: hidden;

  ${media.mobile} {
    width: calc(100vw - 20px);
    height: calc(100vh - 150px);
  }
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

  button {
    width: 10px;
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const BodyContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 40px;

  ${media.mobile} {
    flex-direction: column;
    margin-left: 0px;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  font-size: 15px;
  font-family: 'NanumSquareR';
  height: 100%;

  overflow-y: scroll;

  ${media.mobile} {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.mobile} {
    width: 80%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  .kr {
    font-family: 'BlackHanSans';
    font-size: 30px;
    margin-right: 10px;

    ${media.mobile} {
      font-size: 25px;
    }
  }

  .title {
    font-family: bold;

    ${media.mobile} {
      display: none;
    }
  }

  .date {
    color: grey;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;

  font-family: 'NanumSquareR';

  .description {
    font-weight: bold;
  }

  .description-list {
    white-space: pre-line;
  }

  .link {
    text-decoration: underline;
    :hover {
      cursor: pointer;
    }
  }

  ${media.mobile} {
    margin-bottom: 50px;
  }
`;