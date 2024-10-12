import React, { useState } from 'react';
import { FaEdit, FaSave } from 'react-icons/fa';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const ProfileComponent: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [mobile, setMobile] = useState('+1234567890');
  const [address, setAddress] = useState('123 Main St, City, Country');
  const [currentPlan, setCurrentPlan] = useState('Premium Plan');
  const [expiryDate, setExpiryDate] = useState('31-12-2024');
  const [profilePic, setProfilePic] = useState(
    'https://picsum.photos/id/237/200/300'
  );

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUploadPic = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setProfilePic(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Profile</h1>
        <Button variant="ghost" size="icon" onClick={handleEdit}>
          {isEditing ? <FaSave size={16} /> : <FaEdit size={16} />}
        </Button>
      </div>

      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <img
            src={profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full border"
          />
          {isEditing && (
            <label className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleUploadPic}
              />
              <span className="text-xs">+</span>
            </label>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-600">Name</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isEditing}
            className="mt-1 w-full"
          />
        </div>
        <div>
          <label className="block text-gray-600">Email</label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEditing}
            className="mt-1 w-full"
          />
        </div>
        <div>
          <label className="block text-gray-600">Mobile No</label>
          <Input
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            disabled={!isEditing}
            className="mt-1 w-full"
          />
        </div>
        <div>
          <label className="block text-gray-600">Current Plan</label>
          <div className="flex items-start justify-start flex-col">
            <Input
              value={currentPlan}
              onChange={(e) => setCurrentPlan(e.target.value)}
              disabled={!isEditing}
              className="mt-1 w-full"
            />
            <Label variant="disclaimer" className="mt-1 text-gray-400">
              (Expiry: {expiryDate})
            </Label>
          </div>
        </div>
        <div>
          <label className="block text-gray-600">Address</label>
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            disabled={!isEditing}
            className="mt-1 w-full"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <Button variant="destructive">Delete Account</Button>
        <Button variant="outline">Logout</Button>
      </div>
    </div>
  );
};

export default ProfileComponent;
