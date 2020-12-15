import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'gatsby';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Link to='/'>
            {' '}
            <Nav.Link href='#home'>Home</Nav.Link>
          </Link>
          <Link to='/app/dashboard'>
            {' '}
            <Nav.Link href='#link'>Dashboard</Nav.Link>
          </Link>
        </Nav>
        <Link to='/app/login'>
          <Button variant='outline-success'>Login / Sign Up</Button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
