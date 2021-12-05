import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Layout/Navbar';
import Index from './components/Layout/Index';
import Lyrics from './components/tracks/Lyrics'

import { Provider } from './context'

function App() {
  return (
    <Provider>
    <Router>
      <>
        <Navbar />

        <div className="container">
          <Routes>
            <Route exatc path="/" element={<Index />} />
            <Route exact path="/lyrics/track/:id" element={<Lyrics />} />
          </Routes>
        </div>
      </>
    </Router>
    </Provider>
  );
}

export default App;
