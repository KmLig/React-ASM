import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        "Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }
  render() {
    return (
      <Navbar className="bg-dark p-4 text-warning navbar-collapse navbar-expand-md">
        <NavbarBrand href="/" className="me-5">
          <div className="btn btn-outline-warning">
            <i className="fa fa-database" aria-hidden="true"></i> HRM
          </div>
        </NavbarBrand>                 
        <NavbarToggler className="bg-warning" onClick={this.toggleNav}>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </NavbarToggler>
        <Collapse
          className="navbar-collapse justify-content-end"
          isOpen={this.state.isNavOpen}
          navbar
        >                  
          <Nav navbar className="">          
            <NavItem>
              <NavLink
                className="nav-item btn btn-outline-warning rounded-pill me-2 mt-2"
                to="/homepage"
              >
                <i class="fa fa-home" aria-hidden="true"></i> Homepage
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-item btn btn-outline-warning rounded-pill me-2 mt-2"
                to="/employee"
              >
                <i class="fa fa-user-circle" aria-hidden="true"></i> Staff
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-item btn btn-outline-warning rounded-pill me-2 mt-2"
                to="/department"
              >
                <i class="fa fa-address-book-o" aria-hidden="true"></i>{" "}
                Department
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nar-item btn btn-outline-warning rounded-pill me-2 mt-2"
                to="/salary"
              >
                <i class="fa fa-money" aria-hidden="true"></i> Salary
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navbar-text btn btn-outline-warning rounded-pill me-2 mt-2"
                to="/login"
              >
                <i class="fa fa-sign-in fa-lg" aria-hidden="true"></i> Login
              </NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
