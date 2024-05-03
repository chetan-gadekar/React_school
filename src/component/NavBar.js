import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './All.css'

export default function NavBar() {
   // const [isOpen, setIsOpen] = useState(false);

   // const toggleMenu = () => {
   //    setIsOpen(!isOpen);
   // };

   return (
      <div>
         <div className="coverDiv">
               <Navbar expand="lg" className="bg-body-tertiary navItems">
               <Container>
               <section className="logoSec">
                  <i className="fa fa-graduation-cap"></i>
                  <span>Sanjivani</span>
               </section>
               <Navbar.Brand href="#home"></Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="/">Registration</Nav.Link>
                     <Nav.Link href="/">Academics</Nav.Link>
                     <Nav.Link href="/">Contact Us</Nav.Link>
                     <Nav.Link href="/">About Us</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
               </Container>
            </Navbar>
               
               <div className="mainDiv">
               <section className="mainSec">
                  <h1>World's Biggest College</h1>
                  <p>
                     Igniting minds, fostering excellence — a vibrant community where every student thrives
                     academically and personally.
                  </p>
                  <a href="/">REGISTER</a>
               </section>
            </div>
         </div>
         
      </div>
   );
}




