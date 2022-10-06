import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
const Header = ()=>{
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container>
      <Navbar.Brand href="/">
          E-Commerece App
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link href="/" > Home
            </Nav.Link>
            <Nav.Link href="/">Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}
export default Header
