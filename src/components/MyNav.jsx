/* import logo from '../logo.svg'; */
import { Container, Nav, Navbar } from "react-bootstrap";


const MyNav = () => (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link href="#Browse">Browse</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
)

export default MyNav