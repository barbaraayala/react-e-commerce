import'./NavBar.css'
import CardWidget from '../cardWidget/Cardwidget.js'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const NavBar =() => {
  return (
<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">La Tiendita</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/category/ropa">Ropa</Nav.Link>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/cart"><CardWidget/></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    
  );
}

export default NavBar;