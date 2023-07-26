import { gsap } from 'gsap';
import './index.css';
import { MainContainer, Title, Description } from './index.styles';
import { useState, useEffect, useRef } from 'react';

function MainPage() {
  const NAME_TEXT = 'Hyun Roh';

  const DES_TEXT = [
    '기록과 디자인을 즐기는',
    'React를 사용하는',
    'Typescript를 사용하는',
    '새로움에 도전적인',
  ];

  const [text, setText] = useState('');
  const [descriptionText, setDescritionText] = useState('');

  const [textCount, setTextCount] = useState(0);
  const [descriptionCount, setDescriptionCount] = useState(0);
  const [index, setIndex] = useState(0);

  const boxRef = useRef(null);

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
        setDescritionText(descriptionText.slice(0, -1));

        if (descriptionText.length === 1) {
          setDescriptionCount(0);
          if (index === DES_TEXT.length - 1) {
            setIndex(0);
          } else {
            setIndex(index + 1);
          }
        }
      }
    }, 100);

    return () => clearInterval(nameInterval);
  });

  return (
    <MainContainer>
      <Title>{text}</Title>
      <Description ref={boxRef}>안녕하세요</Description>
      <Description ref={boxRef}>{descriptionText}</Description>
      <Description ref={boxRef}>프론트엔드 개발자 노현입니다.</Description>
    </MainContainer>
  );
}
export default MainPage;
