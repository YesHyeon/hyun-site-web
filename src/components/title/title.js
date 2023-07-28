import React from 'react';
import { MainContainer } from './title.styles';

const title = (props) => {
  return <MainContainer>{props.text}</MainContainer>;
};

export default title;
