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
import MoveTopBtn from './components/moveTopButton';

function App() {
  const mainRef = useRef(HTMLDivElement);
  const introduceRef = useRef(HTMLDivElement);
  const worksRef = useRef(HTMLDivElement);
  const projectsRef = useRef(HTMLDivElement);
  const activitiesRef = useRef(HTMLDivElement);
  const etcRef = useRef(HTMLDivElement);

  return (
    <div id="Main" className="Main">
      <Headers
        mainRef={mainRef}
        refs={[introduceRef, worksRef, projectsRef, activitiesRef, etcRef]}
      />
      <Main mainRef={mainRef} />
      <Introduce introduceRef={introduceRef} />
      <Works worksRef={worksRef} />
      <Projects projectsRef={projectsRef} />
      <Activities activitiesRef={activitiesRef} />
      <Etc etcRef={etcRef} />
      <Footer />
      <MoveTopBtn mainRef={mainRef} />
    </div>
  );
}

export default App;
