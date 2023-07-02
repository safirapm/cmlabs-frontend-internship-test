import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./NavbarPage.css";

const NavbarPage = () => {
  return (
    <>
      <Navbar fixed="top" bg="light" data-bs-theme="light">
        <Container className="mb-0 p-1">
          <Navbar.Brand href="/" className="fw-bold">
            Houseat
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/categories">All Categories</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPage;
