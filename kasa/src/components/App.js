import React from 'react';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import '../style/App.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Description from '../Pages/Fiche-logement';


function App() {
  return (
    <Router>
      <div className='main'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/fiche' element={<Description />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
