import { User } from '../../types/user';
import { Button } from '../ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../ui/table';

interface UserTableProps {
  users: User[];
  onEdit: (user: User | null) => void; // Allow null for adding new users
  onDelete: (id: number) => void;
}

const emptyUser: User = { id: 0, name: '', email: '', role: '', status: '' }; // Empty user object

const UserTable: React.FC<UserTableProps> = ({ users, onEdit, onDelete }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User Management</h1>
        <Button onClick={() => onEdit(emptyUser)} variant="default">
          {' '}
          {/* Pass emptyUser */}
          Add New User
        </Button>
      </div>
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>
                <Button
                  onClick={() => onEdit(user)}
                  variant="outline"
                  className="mr-2"
                >
                  Edit
                </Button>
                <Button onClick={() => onDelete(user.id)} variant="destructive">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
