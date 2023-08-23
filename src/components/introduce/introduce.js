import { MainContainer, Hand, ProfileCardWrapper } from './introduce.styles';
import { useState, useEffect, useRef, useCallback } from 'react';
import hand from '../../assets/images/introduce/hand.svg';
import ProfileCard from '../profileCard/profileCard';
import RightMenu from '../rightMenu/rightMenu';

function Introduce() {
  const [cardPosition, setCardPosition] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  const handRef = useRef();

  const handleScroll = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setScrollPosition(true);
    } else {
      setScrollPosition(false);
    }
  }, []);

  const leftScroll = useCallback((e) => {
    e.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      } else {
        entry.target.style.opacity = 0;
      }
    });
  }, []);

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
    <div>
      <MainContainer ref={handRef}>
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
        {cardPosition ? (
          <ProfileCard setCardPosition={setCardPosition} />
        ) : null}
      </MainContainer>
    </div>
  );
}
export default Introduce;
