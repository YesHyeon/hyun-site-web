import '../../assets/fonts/index';
import 'react-image-gallery/styles/css/image-gallery.css';
import profileImage from '../../assets/images/introduce/profile.png';
import {
  Header,
  BodyContainer,
  MainContainer,
  CloseButton,
  TextContainer,
  ImageContainer,
  Profile,
  TitleContainer,
  DescriptionWrapper,
  DescriptionText,
  SnsContainer,
  Sns,
  SnsWrapper,
} from './index.styles';
import github from '../../assets/images/icons/github.svg';
import blog from '../../assets/images/icons/blog.svg';
import email from '../../assets/images/icons/email.svg';
import ImageGallery from 'react-image-gallery';

import { PROJECTS } from '../../constants/project';

const ProjectCard = (props) => {
  const images = [
    {
      original: PROJECTS[props.item].image,
      thumbnail: PROJECTS[props.item].image,
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    <MainContainer>
      <Header>
        <button onClick={() => props.setIsClicked(false)}>X</button>
      </Header>
      <TitleContainer>
        <div className="kr">{PROJECTS[props.item].kr}</div>
        <div className="title">{PROJECTS[props.item].title}</div>
        <div className="date">{PROJECTS[props.item].date}</div>
      </TitleContainer>
      <BodyContainer>
        <ImageContainer>
          <ImageGallery items={images} />
          <SnsWrapper>
            <Sns
              src={github}
              onClick={() => window.open('https://github.com/YesHyeon')}
            ></Sns>
            <Sns
              src={blog}
              onClick={() => window.open('https://yeshyun.tistory.com')}
            ></Sns>
            <Sns
              src={email}
              onClick={() => window.open('https://yeshyun.tistory.com')}
            ></Sns>
          </SnsWrapper>
        </ImageContainer>
        <TextContainer>
          <DescriptionWrapper>
            <div className="description">
              {PROJECTS[props.item].description}
            </div>
            {PROJECTS[props.item].info.map((item, index) => {
              return (
                <li key={index} className="description-list">
                  {item}
                </li>
              );
            })}
            {PROJECTS[props.item].link.map((item, index) => {
              return (
                <>
                  <div>{Object.keys(item)[0]}</div>
                  <a href={item[Object.keys(item)[0]]} alt="dd">
                    {item[Object.keys(item)[0]]}
                  </a>
                </>
              );
            })}
          </DescriptionWrapper>
        </TextContainer>
      </BodyContainer>
    </MainContainer>
  );
};

export default ProjectCard;
