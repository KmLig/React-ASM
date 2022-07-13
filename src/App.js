import './App.css';
import React, { Component } from 'react';
import Home from './components/HomeComponent';
import StaffList from './components/StaffListComponent';
import Department from './components/DepartmentComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import './App.css';
import { STAFFS, DEPARTMENTS, ROLE} from './shared/staff';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import StaffDetail from './components/StaffDetailComponent';
import Salary from './components/SalaryComponent';

class App extends Component {  
    
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS
    };
  }

  
  render() {
    const StaffWithId = ({match}) => {      
      return(
          <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
      );
    };
    

    
    return (
      <BrowserRouter>      
        <div>
          <Header />
          <Switch>
              <Route path='/homepage' component={Home} />
              <Route exact path='/employee' component={() => <StaffList staffs={this.state.staffs} />} />
              <Route path='/employee/:staffId' component={StaffWithId} />
              <Route path='/department' component={() => <Department departments={this.state.departments} />} />
              <Route path='/salary' component={() => <Salary staffs={this.state.staffs} />} />
              <Redirect to='/homepage' />
              {/* <Route path="*" element={<Navigate replace to="/homepage" />} /> */}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>

    );
  }  
}

export default App;
