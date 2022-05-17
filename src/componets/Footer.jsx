import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer>
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Meu diario de Academia</Navbar.Brand>
      </Container>
    </Navbar>
    </footer>
  )
}
