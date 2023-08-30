import { useState, useCallback } from 'react';

import { MainContainer, CardContainer, CardWrapper } from './index.style';

import ProjectCard from '../projectCard';

import { PROJECTS } from '../../constants/project';

const Project = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [item, setItem] = useState(0);

  const handleCardClick = useCallback(
    (id) => {
      setIsClicked(!isClicked);
      setItem(id);
    },
    [isClicked]
  );

  const renderLoopText = () => {
    const renderItem = [];
    for (let i = 0; i < 5; i++) {
      renderItem.push(<div className="loop-text">PROJECTS</div>);
    }
    return renderItem;
  };

  return (
    <MainContainer>
      <div className="background-title">{renderLoopText()}</div>
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
              <div className="stack">
                {item.stacks[0]['Frontend'].map((stack) => {
                  return <div className="stack-item">{stack}</div>;
                })}
              </div>
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
