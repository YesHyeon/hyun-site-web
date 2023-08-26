import { useState, useCallback } from 'react';

import {
  MainContainer,
  Header,
  CardContainer,
  CardWrapper,
  Card,
  CardText,
  CardLinkContainer,
  CardDescriptionContainer,
} from './project.style';

import ProjectCard from '../projectCard';

import { PROJECTS } from '../../constants/project';

const Project = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [item, setItem] = useState(0);

  const handleCardClick = useCallback(
    (id, index) => {
      setIsClicked(!isClicked);
      setItem(id);
      // console.log(isClicked);
      // if (isClicked[index]) {
      //   console.log('여기1');
      //   card.style.width = '430px';
      //   card.style.height = '330px';
      // } else {
      //   console.log('여기2');
      //   card.style.width = '800px';
      //   card.style.height = '600px';
      // }
      // const newData = isClicked;
      // newData[index] = !isClicked[index];
      // setIsClicked(newData);

      // console.log(document.querySelector(`.${id}`));
      // alert('dd');
    },
    [isClicked]
  );

  return (
    <MainContainer>
      <Header>
        <div className="loop-text">PROJECTS</div>
        <div className="loop-text">PROJECTS</div>
        <div className="loop-text">PROJECTS</div>
        <div className="loop-text">PROJECTS</div>
      </Header>
      <CardContainer>
        {isClicked ? (
          <ProjectCard item={item} setIsClicked={setIsClicked} />
        ) : null}
        {PROJECTS.map((item, index) => {
          return (
            <CardWrapper
              className={item.id}
              key={item.id}
              onClick={() => {
                handleCardClick(item.id);
              }}
            >
              <img src={item.image} alt={item.title} />
              <div className="kr">{item.kr}</div>
              <div className="title">{item.title}</div>
              <div className="date">{item.date}</div>
            </CardWrapper>
          );
        })}
      </CardContainer>
    </MainContainer>
  );
};

export default Project;
