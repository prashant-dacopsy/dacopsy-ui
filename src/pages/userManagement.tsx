import React, { useState } from 'react';

import UsersTable from '../components/UserManagement/UsersTable';
import { userManagementData } from '../data/userManagement/data';
import { User } from '../types/user';

interface LoginPageProps {}

const UserManagement: React.FC<LoginPageProps> = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Inactive',
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleAddUser = () => {
    setSelectedUser(null); // Pass null to indicate a new user is being added
    setIsFormOpen(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSubmitForm = (user: User) => {
    if (selectedUser) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, { ...user, id: users.length + 1 }]);
    }
    setIsFormOpen(false);
  };

  return (
    <div className="p-px">
      <UsersTable
        addUser={handleAddUser}
        onDelete={handleDeleteUser}
        onEdit={handleEditUser}
        users={userManagementData}
      />
      {/* {isFormOpen && <UserForm user={selectedUser} onSubmit={handleSubmitForm} />} */}
    </div>
  );
};

export default UserManagement;
