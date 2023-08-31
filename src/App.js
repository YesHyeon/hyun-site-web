import { useRef } from 'react';

import './App.css';
import Main from './components/main/index';
import Introduce from './components/introduce';
import Works from './components/works';
import Projects from './components/projects';
import Headers from './components/header';
import Activities from './components/activities/';
import Etc from './components/etc';
import Footer from './footer';

function App() {
  const homeRef = useRef(HTMLDivElement);
  const introduceRef = useRef(HTMLDivElement);
  const worksRef = useRef(HTMLDivElement);
  const projectsRef = useRef(HTMLDivElement);
  const activitiesRef = useRef(HTMLDivElement);
  const etcRef = useRef(HTMLDivElement);

  const handleArrowClick = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="Main" className="Main">
      <Headers
        refs={[introduceRef, worksRef, projectsRef, activitiesRef, etcRef]}
      />
      <div ref={homeRef}>
        <Main />
      </div>
      <div ref={introduceRef}>
        <Introduce />
      </div>
      <div ref={worksRef}>
        <Works />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={activitiesRef}>
        <Activities />
      </div>
      <div ref={etcRef}>
        <Etc ref={etcRef} />
      </div>
      <Footer />
      <button onClick={handleArrowClick}>
        <img
          src={require('./assets/images/icons/arrow.png')}
          className="moveTopBtn"
          alt="mobeTopBtn"
        />
      </button>
    </div>
  );
}

export default App;
