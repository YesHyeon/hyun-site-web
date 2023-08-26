import { useState, useCallback } from 'react';

import { MainContainer, CardContainer, CardWrapper } from './project.style';

import ProjectCard from '../projectCard';

import { PROJECTS } from '../../constants/project';

const Project = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [item, setItem] = useState(0);

  const handleCardClick = useCallback(
    (id) => {
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
