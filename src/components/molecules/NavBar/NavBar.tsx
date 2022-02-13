import React from 'react';

import { MenuButton } from '../MenuButton';

export const NavBar = () => {
  return (
    <div className="flex justify-center absolute left-0 top-0 h-screen px-6 py-4 bg-purple-ultraDark">
      <MenuButton />
    </div>
  );
};
