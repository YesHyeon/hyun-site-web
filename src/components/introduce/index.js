import { MainContainer, Hand, ProfileCardWrapper, Title } from './index.styles';
import { useState, useEffect, useRef, useCallback } from 'react';
import hand from '../../assets/images/introduce/hand.svg';
import ProfileCard from '../profileCard';

function Introduce() {
  const [cardPosition, setCardPosition] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  const handRef = useRef();

  const handleScroll = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setScrollPosition(true);
      const title1 = document.querySelector('.introduce-title');
      title1.classList.add('introduce-title-animation');
    } else {
      setScrollPosition(false);
    }
  }, []);

  const handleCardClick = () => {
    setCardPosition(!cardPosition);
  };

  useEffect(() => {
    let observer;
    const { current } = handRef;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.3 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return (
    <MainContainer ref={handRef}>
      <Title className="introduce-title">
        {`About
         Me`}
      </Title>
      {scrollPosition ? (
        <>
          <Hand src={hand} />
          <ProfileCardWrapper onClick={handleCardClick} />
        </>
      ) : null}
      {cardPosition ? <ProfileCard setCardPosition={setCardPosition} /> : null}
    </MainContainer>
  );
}
export default Introduce;
