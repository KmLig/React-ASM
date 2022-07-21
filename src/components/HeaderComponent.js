import React, { ReactComponent } from "react";
import { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
    render() {
        return (
          <Navbar dark className="bg-dark p-4">
            <div className="container">
              <NavbarBrand href="/">
              <div className="btn btn-outline-warning">
                <i className="fa fa-database" aria-hidden="true"></i>Ứng dụng quản lý nhân sự HRM
              </div>
              </NavbarBrand>
            </div>
          </Navbar>
        );
    }
}

export default Header;