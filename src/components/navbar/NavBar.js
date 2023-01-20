import'./NavBar.css'
import CardWidget from '../cardWidget/Cardwidget.js'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar =() => {
  return (
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href=""></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/category/id">Productos</Nav.Link>
            <Nav.Link href="#cart"><CardWidget cantidad="2"/></Nav.Link> <Nav.Link/>
            

          </Nav>
        </Container>
        <CardWidget/>
      </Navbar>
     
        
      
    
  );
}

export default NavBar;