import React, { Component } from 'react';
import Home from './HomeComponent';
import StaffList from './StaffListComponent';
import Department from './DepartmentComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffDetail from './StaffDetailComponent';
import Salary from './SalaryComponent';
import SearchStaff from './SearchStaffComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { STAFFS, DEPARTMENTS } from '../shared/staff';

class Main extends Component {      
  constructor(props) {
    super(props);  

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
  }  

  addNewStaff(values) {
    let x = 0;
    if(values.department === "hr") {
      x = 1;
    }
    else if (values.department === "marketing") {
      x = 2;
    }
    else if (values.department === "it") {
      x = 3;
    }
    else if (values.department === "finance") {
      x = 4;
    }
    const newStaff = {
      id: STAFFS[STAFFS.length-1].id + 1,
      name: values.fullName,
      doB: values.doB,
      salaryScale: values.salaryScale,
      startDate: values.startDate,
      department: DEPARTMENTS[x],
      annualLeave: values.annualLeave,
      overTime: values.overTime,
      salary: values.salary,
      image: '/assets/images/alberto.jpg'
      }
    STAFFS.push(newStaff);    
    console.log(STAFFS);
    this.setState({
      staffs: STAFFS
    });
  }
  
  render() {
    const StaffWithId = ({match}) => {      
      return(
          <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
      );
    };  
 
    return (           
        <div>
          <Header />
          <Switch>
              <Route path='/homepage' component={Home} />
              <Route exact path='/employee' component={() => <StaffList addNewStaff={(values) => this.addNewStaff(values)} staffs={this.state.staffs} />} />
              <Route path='/employee/:staffId' component={StaffWithId} />
              <Route path='/searchstaff' component={() => <SearchStaff staff={this.state.staffs} />} />
              <Route path='/department' component={() => <Department departments={this.state.departments} />} />
              <Route path='/salary' component={() => <Salary staffs={this.state.staffs} />} />
              <Redirect to='/homepage' />
          </Switch>
          <Footer />
        </div>   
    );
  }  
}

export default Main;
