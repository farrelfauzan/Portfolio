import { Navbar } from 'flowbite-react';

export const Navigation = () => {
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
        <Navbar.Link href="/" className="text-white">
          Home
        </Navbar.Link>
        <Navbar.Link href="/" className="text-white">
          About
        </Navbar.Link>
        <Navbar.Link href="/" className="text-white">
          Carrers
        </Navbar.Link>
        <Navbar.Link href="/" className="text-white">
          Projects
        </Navbar.Link>
        <Navbar.Link href="/" className="text-white">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
