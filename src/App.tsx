import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import TrailPage from './pages/trail';
import Verified from './pages/verified';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/trail" element={<TrailPage />} />
      </Routes>
    </Router>
  );
}

export default App;


