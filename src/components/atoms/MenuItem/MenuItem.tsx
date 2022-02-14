import React, { VFC } from 'react';
import { Link } from 'react-router-dom';

import { MenuItemType } from '../../organisms/Menu/Menu';

export type MenuItemProps = MenuItemType;

export const MenuItem: VFC<MenuItemProps> = ({ label, path }) => {
  return (
    <Link
      to={path}
      className="font-brother font-black text-xl text-stroke-white text-stroke-2 text-fill-transparent uppercase cursor-pointer"
    >
      {label}
    </Link>
  );
};
