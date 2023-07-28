import { MainContainer, Hand, ProfileCardWrapper } from './introduce.styles';
import { useState, useEffect, useRef, useCallback } from 'react';
import hand from '../../images/introduce/hand.svg';
import ProfileCard from '../profileCard/profileCard';

function Introduce() {
  const [scrollPosition, setScrollPosition] = useState(false);
  const [cardPosition, setCardPosition] = useState(false);

  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      setScrollPosition(true);
    } else {
      setScrollPosition(false);
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.3 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  console.log('ccc', cardPosition);

  return (
    <MainContainer ref={dom}>
      {scrollPosition ? (
        <>
          <Hand src={hand} />
          <ProfileCardWrapper
            onClick={() => {
              setCardPosition(!cardPosition);
            }}
          />
        </>
      ) : null}
      {cardPosition ? <ProfileCard setCardPosition={setCardPosition} /> : null}
    </MainContainer>
  );
}
export default Introduce;
