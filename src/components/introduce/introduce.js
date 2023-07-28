import { MainContainer, Hand } from './introduce.styles';
import { useState, useEffect, useRef, useCallback } from 'react';
import hand from '../../images/introduce/hand.svg';

function Introduce() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    console.log('11');
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  }, []);

  const containerTarget = useRef();

  const option = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  };

  const callback = (entries, observer) => {
    console.log(entries, observer);
  };

  let observer = new IntersectionObserver(callback, option);

  //   observer.observe(containerTarget);

  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      // 원하는 이벤트를 추가 할 것
      console.log('ssss');
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return (
    <MainContainer ref={dom}>
      <Hand src={hand} scrollPosition={scrollPosition}></Hand>
    </MainContainer>
  );
}
export default Introduce;
