import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';



// navbar component with search
const Mynavbar: React.FC = () =>  {
  return (
    <Navbar bg="dark" expand="lg" className='mb-3'>
      <Container>
        <Search />
      </Container>
  
    </Navbar>
  );
}

// Header component with navbar
const Header: React.FC= () => {
  return (
    <header>
        <Mynavbar />
    </header>
  );
};

export default Header;