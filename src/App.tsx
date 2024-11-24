import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Structure from './components/Layout/Structure';
import Dashboard from './pages/dashoard';
import Datasets from './pages/datasets';
import LoginPage from './pages/login';
import Profile from './pages/profile';
import Projects from './pages/projects';
import RegisterUser from './pages/register';
import SubscriptionPage from './pages/subscription';
import TrailPage from './pages/trail';
import Verified from './pages/verified';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/trail" element={<TrailPage />} />

        {/* Routes with User Layout */}
        <Route path="/" element={<Structure />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="datasets" element={<Datasets />} />
          <Route path="subscription" element={<SubscriptionPage />} />{' '}
          {/* User Subscription */}
          <Route path="profile" element={<Profile />} />
          {/* Add more routes here as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
