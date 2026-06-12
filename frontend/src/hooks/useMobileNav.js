import { useState } from 'react';

export default function useMobileNav() {
  const [navOpen, setNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleNav = () => setNavOpen((open) => !open);

  const handleDropdownClick = (key) => (e) => {
    if (window.innerWidth <= 900 && openDropdown !== key) {
      e.preventDefault();
      setOpenDropdown(key);
    }
  };

  return { navOpen, toggleNav, openDropdown, handleDropdownClick };
}
