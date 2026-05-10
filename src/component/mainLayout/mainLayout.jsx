import { Outlet, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function MainLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">🛍️ My Shop</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container style={{ marginTop: '80px', flex: 1 }}>
        <Outlet />
      </Container>

      <footer style={{ background: '#212529', color: '#adb5bd', textAlign: 'center', padding: '20px 0', marginTop: 'auto' }}>
        <Container>
          <p style={{ margin: 0 }}>© 2025 My Shop. All rights reserved.</p>
        </Container>
      </footer>

    </div>
  );
}

export default MainLayout;