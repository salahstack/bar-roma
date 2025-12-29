import type { FC } from 'react';

interface navLinkInterface {
  label: string;
  href: string;
}

interface NavbarProps {
  links: navLinkInterface[];
  isOpen: boolean
}

const Navbar: FC<NavbarProps> = ({ links, isOpen }) => {
  return (
    <nav className={`navbar ${isOpen && 'active'}`}>
      <ul className='navbar-list'>
        {links.map(({ label, href }) => (
          <li>
            <a href={href} className='navbar-link'>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
