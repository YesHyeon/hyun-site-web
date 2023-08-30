import React from 'react';
import { MainContainer, RainItem } from './rain.styles';

const Rain = () => {
  const itemArray = [
    '|',
    '|',
    '|',
    '|',
    '|',
    '|',
    '|',
    '|',
    '|',
    '|',
    '|',
    '|',
    '|',
    '|',
    '|',
  ];

  return (
    <MainContainer>
      {itemArray.map((i) => {
        const animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
        return <RainItem delay2={animationDelay}>{i}</RainItem>;
      })}
    </MainContainer>
  );
};

export default Rain;
