import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AboutOurHistory from './components/AboutOurHistory';
import AboutOurTeam from './components/AboutOurTeam';
import AboutTeamMember from './components/AboutTeamMember';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <link to="/">Home</link>
            </li>
            <li>
              <link to="/about">About</link>
            </li>
            <li>
              <link to="/contact">Contact</link>
            </li>
          </ul>
        </nav>

        {/* Define the Routes */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
              <Route path="team" element={<AboutOurTeam/>} />
              <Route path="history" element={<AboutOurHistory/>} />
               
              {/* Route with parameter id */}
              <Route path="team/:id" element={<AboutTeamMember/>} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
