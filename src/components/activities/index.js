import React, { useEffect, useRef, useCallback } from 'react';

import {
  MainContainer,
  DescriptionContainer,
  DescriptionWrapper,
} from './index.styles';
import { ACTIVITIES } from '../../constants/activity';

const Activities = ({ activitiesRef }) => {
  const worksDom = useRef();
  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const title2 = document.querySelector('.activities-title');

    if (entry.isIntersecting) {
      title2.style.animation = null;
      title2.style.animation = 'activitiesDown 2s forwards';
    } else {
      title2.style.animation = null;
      title2.style.animation = 'activitiesUp 2s forwards';
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.2 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return (
    <MainContainer ref={activitiesRef}>
      <div className="activities-title" ref={worksDom}>
        activities
      </div>
      {ACTIVITIES.map((item) => {
        return (
          <DescriptionContainer className="works-content" ref={dom}>
            {item.contents.map((content) => {
              return (
                <DescriptionWrapper ref={dom} key={content.title}>
                  <div className="box">
                    <div className="title">{content.id}</div>
                    <div className="company">{content.title}</div>
                    <div className="date">{content.date}</div>
                    <div className="team">{content.team}</div>
                    <div className="stack">{content.stack}</div>
                    <img src={content.imgage} alt={content.title}></img>
                    <ul>
                      <div className="main">{content.info[0]}</div>
                      {content.info[1].map((itm) => {
                        return <li className="sub">{itm}</li>;
                      })}
                    </ul>
                  </div>
                </DescriptionWrapper>
              );
            })}
          </DescriptionContainer>
        );
      })}
    </MainContainer>
  );
};

export default Activities;
