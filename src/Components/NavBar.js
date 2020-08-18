import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';


const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">J-Trak</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contacts">Contacts</Nav.Link>
                    <Nav.Link href="/jobs">Jobs</Nav.Link>
                </Nav>
                <Button>Logout</Button>
            </Navbar.Collapse>
        </Navbar >
    )
};

export default NavBar;