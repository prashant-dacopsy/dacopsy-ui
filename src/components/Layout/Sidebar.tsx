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
        `bg-white
         px-1 min-h-screen relative`,
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
                  `flex gap-2 items-center h-20 m-2 p-2 rounded-lg transition-colors duration-300 
                                    ${isActive ? 'border-primary text-primary bg-secondary' : 'bg-white text-gray-900 hover:bg-gray-100'}`
                }
              >
                <div className="flex flex-col p-2">
                  {isCollapsed ? item.collapsedIcon : item.icon}
                </div>
                <div
                  className={cn(
                    'flex flex-col p-2 ',
                    isCollapsed ? 'hidden' : ''
                  )}
                >
                  <p
                    className=" text-black text-lg"
                    style={{ fontSize: '13pt' }}
                  >
                    {item.title}
                  </p>
                  <p className="text-zinc-500 text-sm">{item.description}</p>
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
