import React from 'react';

import { MenuItem } from '../../atoms/MenuItem';
import { NavButton } from '../../molecules/NavButton';

type MenuProps = {
  // isMenuOpen: boolean;
  onToggleMenu: () => void;
};

export type MenuItemType = {
  label: string;
  path: string;
};

const menuItems: MenuItemType[] = [
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'About me',
    path: '/about-me',
  },
  {
    label: 'Skills',
    path: '/skills',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export const Menu = ({ onToggleMenu /* , isMenuOpen */ }: MenuProps) => {
  const renderedMenuItems = menuItems.map((item) => (
    <MenuItem key={item.label} {...item} />
  ));

  // console.log(isMenuOpen);

  return (
    <div className="Menu">
      <NavButton onToggleMenu={onToggleMenu} />
      <div className="flex flex-col justify-center px-20 py-16 h-screen bg-twilight">
        <nav className="ml-32">{renderedMenuItems}</nav>
      </div>
    </div>
  );
};
