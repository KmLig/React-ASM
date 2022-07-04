import './App.css';
import React, { Component } from 'react';
import StaffList from './components/StaffListComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { STAFFS } from './shared/staff';

class App extends Component {  
    
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS
    };
  }
  render() {
    
    return (
      <div>
        <Navbar dark className="bg-dark p-4">
          <div className='container'>
            <NavbarBrand href='/'>Ứng dụng quản lý nhân sự version 1.0</NavbarBrand>
          </div>
        </Navbar>
        <StaffList staffs={this.state.staffs} />
      </div>
    );
  }  
}

export default App;
