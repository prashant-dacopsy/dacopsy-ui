import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import Header from './Header';

const AdminStructure = () => {
  return (
    <>
      <Header />
      <main className="flex gap-5">
        <AdminSidebar />
        <div className="mt-5 container">
          <Outlet /> {/* This will render the nested routes */}
        </div>
      </main>
    </>
  );
};

export default AdminStructure;
