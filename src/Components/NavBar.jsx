import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import e_commerce_logo from '../assets/e_commerce_logo.png'

const NavBar = () => {
  let [user,setUser]=useState(null)
  useEffect(()=>{
    let userData= JSON.parse(localStorage.getItem("user"))
    setUser(userData);
    // console.log(userData);
    // localStorage.clear();
  },[])
  let logout = () => {
    localStorage.clear();
    window.location.reload();
  }
  // console.log("user",user)
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Nav.Link as={Link} to={"/"}>
            <img src={e_commerce_logo} style={{width:"50px"}}></img>
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link> */}
            </Nav>
            {user ? (
              <>
                <Nav.Link as={Link} to={"/wishlist"}>
                  <i
                    className="bi bi-heart-fill pe-4 fs-3"
                    title="Whishlist"
                    style={{ cursor: "pointer" }}
                  ></i>
                </Nav.Link>
                <Nav.Link as={Link} to={"/cart"}>
                  <i
                    className="bi bi-cart pe-3 fs-3"
                    title="cart"
                    style={{ cursor: "pointer" }}
                  ></i>
                </Nav.Link>

                <DropdownButton
                  align="end"
                  title="Profile"
                  id="dropdown-menu-align-end"
                >
                  <Dropdown.Item eventKey="1">{user.name}</Dropdown.Item>
                  <Dropdown.Item eventKey="2">{user.email}</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="3" onClick={logout}>
                    Logout
                  </Dropdown.Item>
                </DropdownButton>
              </>
            ) : (
              <>
                <Button variant="info">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={"/login"}
                  >
                    Login
                  </Link>
                </Button>{" "}
                &nbsp;
                <Button variant="info">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={"/register"}
                  >
                    Register
                  </Link>
                </Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default NavBar;