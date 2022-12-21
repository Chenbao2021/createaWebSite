import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import About from './About/About';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import News from './News/News';
import Menu from './Menu/Menu';
import Album from './album/Album';
import BottomBar from './bottomBar/BottomBar';
import CommandesDisplay from './bottomBar/CommandesDisplay';
import { useSelector } from 'react-redux/es/exports';

function App() {
  const commander = useSelector((state) => state.commander.commanderClicked);

  return (
    <div className='appContainer'>
      <Router>
        <nav className='appNavbar'>
        <Navbar />
        </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/album" element={<Album />} />
          </Routes>
        <div>
          <BottomBar />
          { commander ? <CommandesDisplay /> : undefined}
        </div>
      </Router>
    </div>
  );
}

export default App;
