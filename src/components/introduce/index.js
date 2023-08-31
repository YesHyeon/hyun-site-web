import { useState, useEffect, useRef, useCallback } from 'react';

import { MainContainer, Hand, ProfileCardWrapper, Title } from './index.styles';
import hand from '../../assets/images/introduce/hand.svg';
import ProfileCard from '../profileCard';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

function Introduce({ introduceRef }) {
  const [cardPosition, setCardPosition] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  const { lockScroll } = useBodyScrollLock();

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
    lockScroll();
    setCardPosition(!cardPosition);
  };

  useEffect(() => {
    let observer;
    const { current } = introduceRef;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.3 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return (
    <MainContainer ref={introduceRef}>
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
