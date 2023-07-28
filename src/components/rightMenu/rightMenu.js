import React from 'react';
import { MainContainer, MenuText, MenuTextWrapper } from './rightMenu.styles';

const RightMenu = () => {
  return (
    <MainContainer>
      <MenuTextWrapper>
        <MenuText
          onClick={() =>
            window.open(
              'https://www.figma.com/file/9p7UCPZf4RxpHES2T17vkP/%EB%85%B8%ED%98%84-%EC%9D%B4%EB%A0%A5%EC%84%9C?type=design&node-id=0%3A1&mode=design&t=o2E2jp9XDcwuYP1f-1'
            )
          }
        >
          Resume
        </MenuText>
        <MenuText onClick={() => window.open('https://github.com/YesHyeon')}>
          Github
        </MenuText>
        <MenuText onClick={() => window.open('https://yeshyun.tistory.com')}>
          TechBlog
        </MenuText>

        <MenuText
          onClick={() => window.open('https://www.linkedin.com/in/yeshyun')}
        >
          LinkedIn
        </MenuText>
        <MenuText></MenuText>
      </MenuTextWrapper>
    </MainContainer>
  );
};

export default RightMenu;
