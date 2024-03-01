import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

// we are using bootstrap navbar
const Header = () => {
    return (
       <>
    <Navbar className="bg-[#265073]">
        <Container>
            <Navbar.Brand className='!text-[#fefbf6]'>Data Virtualization Dashboard</Navbar.Brand>
        </Container>
    </Navbar>
</>
    )
}

export default Header