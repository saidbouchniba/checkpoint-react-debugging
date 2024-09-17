import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';


function Header({dark,setdark,category,setcategory,search,setsearch}) {
  
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" bg={dark===true?"dark":"light"} data-bs-theme={dark===true?"dark":"light"}>
      <Container fluid>
        <Navbar.Brand href="#">The Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"  onClick={()=>setcategory("")}>All products</Nav.Link>
            <Nav.Link href="#action2"  onClick={()=>setcategory("men's clothing")}>Men</Nav.Link>
            <Nav.Link href="#action3"  onClick={()=>setcategory("women's clothing")}>Women</Nav.Link>
            <Nav.Link href="#action4" onClick={()=>setcategory("electronics")} >Electronics</Nav.Link>
            <Nav.Link href="#action5"  onClick={()=>setcategory("jewelery")}>Jewelery</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
            onChange={(event)=>setsearch(event.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{height:"40px",margin:"10px"}}

            />
            
            
  <input id="checkbox" type="checkbox" onClick={()=>setdark(!dark)}/>
  <label className="switch" htmlFor="checkbox">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="slider"
    >
      <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" />
    </svg>
  </label>

           
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
