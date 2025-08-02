import React from 'react'
import {NavLink} from 'react-router-dom'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'

export const HeaderNav = () => {
  return (
    <Navbar bg="light" expand="lg" className="border-bottom py-3">
      <Container>
        {/* Logo redondeado */}
        <Navbar.Brand as={NavLink} to="/inicio" className="d-flex align-items-center">
          <Image 
          src="/images/logo.png" 
          alt="Logo" 
          roundedCircle
          width={70} height={70} 
          className="me-2" />
          <span className="fw-light">Desarrollador Web</span>
        </Navbar.Brand>

        {/** Boton de hamburguesa movil */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/** Navegacion */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold text-uppercase">
            <Nav.Link as={NavLink} to="/inicio">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/portafolio">Portafolio</Nav.Link>
            <Nav.Link as={NavLink} to="/servicios">Servicios</Nav.Link>
            <Nav.Link as={NavLink} to="/curriculum">Curriculum</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
