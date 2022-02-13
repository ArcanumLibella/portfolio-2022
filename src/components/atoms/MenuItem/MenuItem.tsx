import React, { VFC } from 'react';

import { MenuItemType } from '../../organisms/MenuNav/MenuNav';

export type MenuItemProps = MenuItemType;

export const MenuItem: VFC<MenuItemProps> = ({ label, path }) => {
  return (
    // TODO: Transformer en Link
    <h2 className="font-brother font-black text-xl text-stroke-white text-stroke-2 text-fill-transparent uppercase cursor-pointer">
      {label}
    </h2>
  );
};
