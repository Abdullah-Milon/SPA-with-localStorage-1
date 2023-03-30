import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
    return (
        <Navbar className='navbar' expand="lg" >
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <div >
                    <input type="search" className='search-field' placeholder='Search' />
                    <button>Search</button>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;