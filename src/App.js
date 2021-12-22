import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/nabvar';
import Banner from './components/banner';
import Animation from './components/animation';
import Mint from './components/mint';
import Roadmap from './components/roadmap';
import FAQ from './components/faq';
import Gallery from './components/gallery';

import './styles/navbar.css';
import './styles/main.css';
import './styles/fontawesome.min.css'

function App() {
  return (
    <Fragment>
      <Navigation />
      <Banner />
      <Gallery />
      <Animation />
      <Mint />
      <Roadmap />
      <FAQ />
    </Fragment>
  );
}

export default App;
