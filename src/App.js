import { useRef } from 'react';

import './App.css';
import Main from './components/main/index';
import Introduce from './components/introduce/introduce';
import Works from './components/works/works';
import Projects from './components/projects/project';
import Headers from './components/header/header';
import Activities from './components/activities/';
import Etc from './components/etc';
import Footer from './footer';

function App() {
  const homeRef = useRef(HTMLDivElement);
  const onHomeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="Main" className="Main">
      <Headers />
      <div ref={homeRef}>
        <Main />
      </div>
      <Introduce />
      <Works />
      <Projects />
      <Activities />
      <Etc />
      <Footer />
      <button onClick={onHomeClick}>
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
