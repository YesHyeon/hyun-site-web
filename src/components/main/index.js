import { motion } from 'framer-motion';
import logoPath from './svgPath.json';
import './index.css';
import Rain from '../rain/rain';

import {
  MainContainer,
  Title,
  Description,
  DescriptionWrapper,
  Blink,
  TypingWrapper,
  Svg,
  RainWrapper,
  Flag,
  FlagText,
} from './index.styles';
import { useState, useEffect, useRef } from 'react';

function MainPage() {
  const NAME_TEXT = 'Hyun Roh';

  const DES_TEXT = [
    '기록과 디자인을 즐기는  ',
    'React를 사용하는   ',
    'Typescript를 사용하는   ',
    '새로움에 도전적인     ',
  ];

  const [text, setText] = useState('');
  const [descriptionText, setDescritionText] = useState('');

  const [textCount, setTextCount] = useState(0);
  const [descriptionCount, setDescriptionCount] = useState(0);
  const [index, setIndex] = useState(0);

  const boxRef = useRef(null);

  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    const nameInterval = setInterval(() => {
      if (textCount !== NAME_TEXT.length) {
        setText(text + NAME_TEXT[textCount]);
        setTextCount(textCount + 1);
      }

      // 글자 다 안써졌을때
      if (descriptionCount < DES_TEXT[index].length) {
        setDescritionText(descriptionText + DES_TEXT[index][descriptionCount]);
        setDescriptionCount(descriptionCount + 1);
      }
      // 글자 다 써졌을때, 다시 지우는 과정
      else {
        setTypingSpeed(70);
        setDescritionText(descriptionText.slice(0, -1));

        if (descriptionText.length === 1) {
          setDescriptionCount(0);
          if (index === DES_TEXT.length - 1) {
            setIndex(0);
          } else {
            const speedArray = [100, 120, 150];
            setTypingSpeed(
              speedArray[Math.floor(Math.random() * speedArray.length)]
            );
            setIndex(index + 1);
          }
        }
      }
    }, typingSpeed);

    return () => clearInterval(nameInterval);
  });

  const svg = {
    start: { pathLength: 0, fill: 'none' },
    end: {
      pathLength: 1,
      fill: 'black',
      transition: { duration: 100 },
    },
  };

  const flaTextArray = ['Frontend Developer'];

  for (let i = 0; i < 20; i++) {
    flaTextArray.push('Frontend Developer');
  }

  return (
    <MainContainer>
      <Rain />
      <Flag>
        {flaTextArray.map((i) => {
          return <FlagText>{i}</FlagText>;
        })}
      </Flag>
      <Svg viewBox="0 0 334 363" xmlns="http://www.w3.org/2000/svg">
        <motion.svg>
          <motion.path
            variants={svg}
            initial="start"
            animate="end"
            strokeWidth="3"
            d={logoPath.logoPath}
          />
          {/* <motion.path
            variants={svg}
            initial="end"
            animate="start"
            strokeWidth="3"
            d={logoPath.logoPath}
          />
          <motion.path
            variants={svg}
            initial="start"
            animate="end"
            strokeWidth="3"
            d={logoPath.logoPath}
          />
          <motion.path
            variants={svg}
            initial="start"
            animate="end"
            strokeWidth="3"
            d={logoPath.logoPath}
          /> */}
        </motion.svg>
      </Svg>
      <DescriptionWrapper>
        <Description ref={boxRef}>안녕하세요 👨🏻‍💻 </Description>
        <TypingWrapper>
          <Description ref={boxRef} index={index}>
            {descriptionText}
          </Description>
          <Blink></Blink>
        </TypingWrapper>
        <Description ref={boxRef}>프론트엔드 개발자 노현입니다.</Description>
      </DescriptionWrapper>
    </MainContainer>
  );
}
export default MainPage;
