import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Structure from './components/Layout/Structure';
import Dashboard from './pages/dashoard';
import LoginPage from './pages/login';
import Projects from './pages/projects';
import TrailPage from './pages/trail';
import Verified from './pages/verified';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/trail" element={<TrailPage />} />
        {/* Routes with layout */}
        <Route path="/" element={<Structure />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          {/* Add more routes here as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


