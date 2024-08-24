import { ReactElement } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { MdSubscriptions } from 'react-icons/md';
import { TbClock, TbDatabaseCog, TbFolderOpen } from 'react-icons/tb';
const iconSize = 35;
const iconSizeCollapsed = 25;

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
    icon: <TbClock size={iconSize} />,
    collapsedIcon: <TbClock size={iconSizeCollapsed} />,
    url: '/dashboard',
  },
  {
    id: 2,
    title: 'Projects',
    description: 'Organize your datasets into projects',
    icon: <TbFolderOpen size={iconSize} />,
    collapsedIcon: <TbFolderOpen size={iconSizeCollapsed} />,
    url: '/projects',
  },
  {
    id: 3,
    title: 'Datasets',
    description: 'Manage your datasets',
    icon: <TbDatabaseCog size={iconSize} />,
    collapsedIcon: <TbDatabaseCog size={iconSizeCollapsed} />,
    url: '/datasets',
  },
  {
    id: 4,
    title: 'Subscriptions',
    description: 'Manage your subscriptions',
    icon: <MdSubscriptions size={iconSize} />,
    collapsedIcon: <MdSubscriptions size={iconSizeCollapsed} />,
    url: '/subscription',
  },
  {
    id: 5,
    title: 'Profile',
    description: 'Manage your profile',
    icon: <FaUserCircle size={iconSize} />,
    collapsedIcon: <FaUserCircle size={iconSizeCollapsed} />,
    url: '/profile',
  },
  {
    id: 6,
    title: 'Support',
    description: 'Raise your concerns with us',
    icon: <FaMessage size={iconSize} />,
    collapsedIcon: <FaMessage size={iconSizeCollapsed} />,
    url: '/support',
  },
];
