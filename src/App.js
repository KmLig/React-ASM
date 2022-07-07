import './App.css';
import React, { Component } from 'react';
import StaffList from './components/StaffListComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
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
        <Header />
        <StaffList staffs={this.state.staffs} />
        <Footer />
      </div>
    );
  }  
}

export default App;
