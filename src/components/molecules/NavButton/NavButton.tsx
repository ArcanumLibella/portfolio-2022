import React, { MouseEvent } from 'react';

type NavButtonProps = {
  onToggleMenu: () => void;
};

export const NavButton = ({ onToggleMenu }: NavButtonProps) => {
  const handleToggleMenu = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onToggleMenu();
  };

  return (
    <div
      className="flex justify-center absolute right-0 top-0 w-20 h-screen px-6 py-4 bg-purple-ultraDark"
      onClick={handleToggleMenu}
      role="button"
      aria-hidden="true"
    >
      {/* TODO: Styliser la nav avec 3 petits traits ? */}
      MENU
      {/* <MenuButton /* onToggleMenu={onToggleMenu} */}
    </div>
  );
};
