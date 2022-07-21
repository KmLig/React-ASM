import React, { ReactComponent } from "react";
import { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
    render() {
        return (
          <Navbar dark className="bg-dark p-4">
            <div className="container">
              <NavbarBrand href="/">
                Ứng dụng quản lý nhân sự version 1.0
              </NavbarBrand>
            </div>
          </Navbar>
        );
    }
}

export default Header;