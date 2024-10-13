import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminStructure from './components/Layout/AdminStructure';
import Structure from './components/Layout/Structure';
import Admin from './pages/admin';
import Dashboard from './pages/dashoard';
import Datasets from './pages/datasets';
import LoginPage from './pages/login';
import Profile from './pages/profile';
import Projects from './pages/projects';
import Reports from './pages/reports';
import SubscriptionPage from './pages/subscription';
import TrailPage from './pages/trail';
import UserManagement from './pages/userManagement';
import Verified from './pages/verified';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin-login" element={<Admin />} />
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

        {/* Routes for Admin with Admin Layout */}
        <Route path="/admin" element={<AdminStructure />}>
          <Route path="user-management" element={<UserManagement />} />
          <Route path="subscriptions" element={<SubscriptionPage />} />{' '}
          {/* Admin Subscription */}
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
