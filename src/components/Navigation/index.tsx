import { Navbar } from 'flowbite-react';
import { useRouter } from 'next/router';

import { NavList } from './NavList';

export const Navigation = () => {
  const router = useRouter();
  return (
    <Navbar
      className="relative z-50 mx-auto w-11/12 bg-transparent pt-3 lg:pt-5"
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white  dark:text-white">
          Farrel Fauzan
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {NavList.map((nav, index) => {
          const isActive = router.pathname === nav.path;
          return (
            <Navbar.Link
              className={isActive ? '!text-yellow-400' : 'text-white'}
              href={nav.path}
              key={index}
              active={isActive}
            >
              {nav.name}
            </Navbar.Link>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
};
