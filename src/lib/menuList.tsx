import { ReactElement } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdSubscriptions } from 'react-icons/md';
import { TbClock } from 'react-icons/tb';
const iconSize = 25;
const iconSizeCollapsed = 25;

import {
  FiBox,
  FiLayers,
  FiLayout,
  FiPhoneCall,
  FiPlayCircle,
  FiUser,
  FiZap,
} from 'react-icons/fi';

// Define the interface for a menu item
interface MenuItem {
  id: number;
  title: string;
  description: string;
  icon: ReactElement;
  collapsedIcon?: ReactElement;
  url: string;
}

// Define the array of menu items with the appropriate type
export const menuItems: MenuItem[] = [
  {
    id: 1,
    title: 'Recents',
    description: 'See summary of your recent activities',
    icon: <FiZap size={iconSize} />,
    collapsedIcon: <FiZap size={iconSizeCollapsed} />,
    url: '/dashboard',
  },
  {
    id: 2,
    title: 'Project Explorer',
    description: 'Organize your datasets into projects',
    icon: <FiLayout size={iconSize} />,
    collapsedIcon: <FiLayout size={iconSizeCollapsed} />,
    url: '/projects',
  },
  {
    id: 3,
    title: 'Playground',
    description: 'Manage your datasets',
    icon: <FiBox size={iconSize} />,
    collapsedIcon: <FiLayers size={iconSizeCollapsed} />,
    url: '/datasets',
  },
  {
    id: 4,
    title: 'Subscriptions',
    description: 'Manage your subscriptions',
    icon: <FiPlayCircle size={iconSize} />,
    collapsedIcon: <FiPlayCircle size={iconSizeCollapsed} />,
    url: '/subscription',
  },
  {
    id: 5,
    title: 'Profile',
    description: 'Manage your profile',
    icon: <FiUser size={iconSize} />,
    collapsedIcon: <FiUser size={iconSizeCollapsed} />,
    url: '/profile',
  },
  {
    id: 6,
    title: 'Support',
    description: 'Raise your concerns with us',
    icon: <FiPhoneCall size={iconSize} />,
    collapsedIcon: <FiPhoneCall size={iconSizeCollapsed} />,
    url: '/support',
  },
];

export const adminMenuItems: MenuItem[] = [
  {
    id: 1,
    title: 'Users',
    description: 'Manage your users',
    icon: <FaUserCircle size={iconSize} />,
    collapsedIcon: <FaUserCircle size={iconSizeCollapsed} />,
    url: '../admin/user-management',
  },
  {
    id: 3,
    title: 'Subscriptions',
    description: 'Manage your subscriptions',
    icon: <MdSubscriptions size={iconSize} />,
    collapsedIcon: <MdSubscriptions size={iconSizeCollapsed} />,
    url: '../admin/subscriptions',
  },
  {
    id: 4,
    title: 'Reports',
    description: 'Manage your Reports',
    icon: <TbClock size={iconSize} />,
    collapsedIcon: <TbClock size={iconSizeCollapsed} />,
    url: '../admin/reports',
  },
];
