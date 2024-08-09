import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './pages/dashoard';
import LoginPage from './pages/login';
import TrailPage from './pages/trail';
import Verified from './pages/verified';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/trail" element={<TrailPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;


