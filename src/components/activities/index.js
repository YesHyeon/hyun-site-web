import React, { useEffect, useRef, useCallback, useState } from 'react';
import {
  MainContainer,
  DescriptionContainer,
  DescriptionTitle,
  DescriptionText,
  DescriptionWrapper,
} from './index.styles';
import { ACTIVITIES } from '../../constants/activity';

const Activities = () => {
  const worksDom = useRef();
  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    console.log(entry.isIntersecting);
    const title2 = document.querySelector('.activities-title');

    if (entry.isIntersecting) {
      title2.style.color = 'rgba(0, 0, 0, 0.1)';
      title2.style.fontSize = '350px';
    } else {
      title2.style.color = 'black';
      title2.style.fontSize = '300px';
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
    <MainContainer>
      <div className="activities-title" ref={worksDom}>
        activity
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
