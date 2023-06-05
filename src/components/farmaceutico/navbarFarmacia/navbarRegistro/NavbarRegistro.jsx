import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Offcanvas,
    Dropdown,
  } from 'react-bootstrap';
  import '../navbarRegistro/navbarRegistroStyles.css';
  import { useNavigate } from 'react-router-dom';
  
  const NavbarRegistro = () => {
    const navigate = useNavigate();
  
    const cerrarSesion=()=>{
      sessionStorage.removeItem('token');
      navigate(`/pharmacy`)
    }
  
    return (
      <>
        <Navbar expand="lg" className="navbar p-0">
          <Container fluid className=" mx-4 ">
            {/* <div className="d-flex align-items-center justify-content-between"> */}
            <Navbar.Brand href="/" className="txTitle">
              <img
                src="https://i.ibb.co/Z8NKxKV/logo-removebg-preview.png"
                alt="logo"
                className="mr-3 align-self-start   "
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
            <Navbar.Offcanvas
              className="offcanvas"
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto"></Nav>
                <Nav className="txCategory">
                  {/* <NavDropdown
                    title="Soy Farmacia"
                    id="basic-nav-dropdown"
                    className="txCategory1 m-2"
                  >
                    <NavDropdown.Item
                      href="#action/3.2"
                      className="txSubcategory"
                    >
                      <p className="txSubcategory m-2">Turnos reservados</p>
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  <Nav.Link href="">
                    <p className="txCategory m-2 mx-4">Ayuda</p>
                  </Nav.Link>
                  <Nav.Link href="">
                    <p className="txCategory m-2 mx-4" onClick={() => navigate('/pharmacy/signUp/adminitration_allowed')}>Iniciar Sesión</p>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

          </Container>
        </Navbar>
      </>
    );
  };
  
  export default NavbarRegistro;
  