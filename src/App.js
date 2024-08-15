
import Header from './components/Header';
import Hero from './components/Hero';
import Home  from './components/Home';

import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={
          <>
            <Header />
            <Hero />
          </>
        } />
        <Route path="/channels" element={
          <>
            <Home />
          </>
        } />

        <Route path="/channels/:id" element={
          <>
            <Home />
          </>
        } />
        
      </Routes>
    </Router>
  );
}

export default App;
