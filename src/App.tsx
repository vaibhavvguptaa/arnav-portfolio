import { Layout } from './components/Layout';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';
import { Suspense } from 'react';

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>  
        <Layout>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </Layout>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
