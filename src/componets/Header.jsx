import React from 'react';
import userIcon from '../img/user_icon.svg';
import '../styles/responsive.css';

import { Navbar, Container } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Meu diario de Academia</Navbar.Brand>
        <img src= {userIcon}  alt="Icone do espaço do usuario" height="80vh" className='centralize'/>
      </Container>
    </Navbar>
  )
};