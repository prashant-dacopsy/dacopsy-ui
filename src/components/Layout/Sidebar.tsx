import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { menuItems } from '../../lib/menuList';
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';
import { NavigationMenu, NavigationMenuList } from '../ui/navigation-menu';

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div
      className={cn(
        ' bg-white px-1 min-h-screen relative',
        isCollapsed ? 'w-20' : 'w-80'
      )}
    >
      <NavigationMenu>
        <NavigationMenuList>
          <ul>
            {menuItems.map((item) => (
              <NavLink
                to={item.url}
                key={item.title}
                className={({ isActive }) =>
                  `flex gap-1 items-center border h-20 m-2 p-2 rounded-lg transition-colors duration-300 
                                    ${isActive ? 'border-primary text-primary' : 'bg-white text-gray-900 hover:bg-gray-100'}`
                }
              >
                {isCollapsed ? item.collapsedIcon : item.icon}
                <div
                  className={cn(
                    'flex flex-col px-2 ',
                    isCollapsed ? 'hidden' : ''
                  )}
                >
                  <p className="font-semibold">{item.title}</p>
                  <p>{item.description}</p>
                </div>
              </NavLink>
            ))}
          </ul>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="absolute -right-11 top-[30%] z-10">
        <Button
          onClick={() => setIsCollapsed(!isCollapsed)}
          variant={'outline'}
          className="border-none shadow-none h-20 hover:bg-slate-100"
        >
          {isCollapsed ? (
            <FiChevronLeft className="rotate-180" />
          ) : (
            <FiChevronLeft />
          )}
        </Button>
      </div>
    </div>
  );
};
