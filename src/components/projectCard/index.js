import {
  Header,
  BodyContainer,
  MainContainer,
  TextContainer,
  ImageContainer,
  TitleContainer,
  DescriptionWrapper,
  Gallery,
} from './index.styles';

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
          <Gallery items={images} />
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
                  <div className="description"> {Object.keys(item)[0]}</div>
                  <div
                    className="link"
                    onClick={() => window.open(item[Object.keys(item)[0]])}
                  >
                    {item[Object.keys(item)[0]]}
                  </div>
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
