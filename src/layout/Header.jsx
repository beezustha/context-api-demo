// components/Header.js

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="warning" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          My Notes
        </Navbar.Brand>
        <Nav className="">
          <Nav.Link as={Link} className="active" to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About Us
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
