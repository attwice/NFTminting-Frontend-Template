// import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown
} from "react-bootstrap";

const Navigation = () => {
  // const [sticky, setSticky] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // }, []);

  // const handleScroll = () => {
  //   if (window.scrollY >= 86) {
  //     setSticky(true);
  //   } else if (window.scrollY < 85) {
  //     setSticky(false);
  //   }
  // }

  return (
    // <div className={`header${sticky ? ' sticky' : ''}`}>
    <div>
      {/* <Navbar variant="dark" expand="md" style={{backgroundColor: '#F7E7BD'}}>
        <Navbar.Brand href="/" className="px-4">
          <img src="./images/logo.png" className="logo-img" alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-4"/>
        <Navbar.Collapse id="basic-navbar-nav" className="d-md-flex justify-content-between">
          <Nav className="mr-auto flex-grow-1">                               
            <Nav.Link href="#home" className="cus-nav-link" onClick={() => window.scrollTo(0, 0)}>Home</Nav.Link>
            <Nav.Link href="#animation" className="cus-nav-link">Animation</Nav.Link>
            <Nav.Link href="#mint" className="cus-nav-link">Mint</Nav.Link> 
            <Nav.Link href="#roadmap" className="cus-nav-link">Roadmap</Nav.Link> 
            <Nav.Link href="#faq" className="cus-nav-link">FAQs</Nav.Link>        
            <div className="d-flex mx-4 mb-2 mb-md-0 social-link">                
              <a href="https://twitter.com/dirty_donkey" target="_blank" className="d-flex align-items-center pe-3" rel="noreferrer">              
                <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" loading="lazy" width="32" alt=""/>
              </a>             
              <a href="https://discord.gg/54gsmfTjDG" target="_blank" className="d-flex align-items-center pe-3" rel="noreferrer">              
                <img src="https://img.icons8.com/color/50/000000/discord--v2.png" loading="lazy" width="32" alt=""/>
              </a>  
              <a href="https://opensea.io/assets?search[query]=donkey" target="_blank" className="d-flex align-items-center pe-3" rel="noreferrer">
                <img src="/images/Logomark-Blue.png" loading="lazy" width="25" alt="" />
              </a> 
              <a href="https://instagram.com/dirtydonkeynft/" target="_blank" className="d-flex align-items-center" rel="noreferrer">          
                <img src="https://img.icons8.com/fluency-systems-regular/24/000000/instagram-new--v2.png" loading="lazy" width="32" alt=""/>
              </a> 
            </div> 
          </Nav>                    
        </Navbar.Collapse>
      </Navbar> */}
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navigation;