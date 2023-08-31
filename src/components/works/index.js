import React, { useEffect, useRef, useCallback } from 'react';

import {
  MainContainer,
  DescriptionContainer,
  DescriptionWrapper,
} from './index.styles';
import { WORKS } from '../../constants/works';

const Works = ({ worksRef }) => {
  const worksDom = useRef();
  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const title = document.querySelector('.background-title');

    if (
      entry.isIntersecting &&
      entry.target.className.includes('background-title')
    ) {
      title.style.animation = null;
      title.style.animation = 'up 1s forwards';
    } else if (
      entry.isIntersecting &&
      entry.target.className.includes('works-content')
    ) {
      title.style.animation = null;
      title.style.animation = 'down 3s forwards';
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = dom;
    const { current: worksDomCurrent } = worksDom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.2 });
      observer.observe(current);
      observer.observe(worksDomCurrent);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return (
    <MainContainer ref={worksRef} className="works-title">
      <div className="background-title" ref={worksDom}>
        works
      </div>
      {WORKS.map((item) => {
        return (
          <DescriptionContainer className="works-content" ref={dom}>
            {item.contents.map((content) => {
              return (
                <DescriptionWrapper key={content.id}>
                  <div className="box">
                    <div className="company-wraaper">
                      <div className="title">{content.id}</div>
                      <div className="company">{content.title}</div>
                    </div>
                    <div className="date">{content.date}</div>
                    <div className="team">{content.team}</div>
                    <div className="stack">{content.stack}</div>
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

export default Works;
