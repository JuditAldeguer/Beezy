import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
//HashLink
import { HashLink } from  'react-router-hash-link'; 
//Styles
import '../styles/layout/header.scss';




function Header() {
  return (
    <header className="header">
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Breaking Bad's Wiki</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark" />
          <Navbar.Collapse id="navbar-dark">
            <Nav>
              <NavDropdown.Item>
                <HashLink className="nav_link" to={`#filters`} title="filters">
                  Filters
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <HashLink className="nav_link" to={`#list`} title="list">
                  Character list
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="https://juditaldeguer.github.io/portfolio/"
                target="_blank"
              >
                Learn more about the author
              </NavDropdown.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
