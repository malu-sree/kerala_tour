import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Register from './components/register';
import Login from './components/login';

function Headernav() {
    const [show, setShow] = useState(false);
    const [pass, setPass] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleloginClose = () => setPass(false);
    const handleloginShow = () => setPass(true);


  return (
    <Navbar expand="lg" style={{backgroundColor:"green"}}>
      <Container>
        <Navbar.Brand href="#home" style={{color:"white"}}>Kerala Tourism</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={handleloginShow}>Login</Nav.Link>

            <Nav.Link onClick={handleShow}>Register</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal show={pass} onHide={handleloginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body><Login /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleloginClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleloginClose}>
           login
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Explore</Modal.Title>
        </Modal.Header>
        <Modal.Body><Register/></Modal.Body>
       

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>5
    </Navbar>

  );
}

export default Headernav;