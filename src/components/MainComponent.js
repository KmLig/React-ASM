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
import { connect } from 'react-redux';
import { addStaff } from '../redux/ActionCreators';


const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments    
  }
}

const mapDispatchToProps = (dispatch) => ({
  addStaff: (id, fullName, doB, startDate, department, salaryScale, annualLeave, overTime, image) => dispatch(addStaff(id, fullName, doB, startDate, department, salaryScale, annualLeave, overTime, image))
})

class Main extends Component {  
    
  constructor(props) {
    super(props);  
  }
  
  render() {
    const StaffWithId = ({match}) => {      
      return(
          <StaffDetail staff={this.props.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
      );
    };  
 
    return (
           
        <div>
          <Header />
          <Switch>
              <Route path='/homepage' component={Home} />
              <Route exact path='/employee' component={() => <StaffList staffs={this.props.staffs} addStaff={this.props.addStaff} departments={this.props.departments} />} />
              <Route path='/employee/:staffId' component={StaffWithId} />
              <Route path='/searchstaff' component={() => <SearchStaff staff={this.props.staffs} />} />
              <Route path='/department' component={() => <Department departments={this.props.departments} />} />
              <Route path='/salary' component={() => <Salary staffs={this.props.staffs} />} />
              <Redirect to='/homepage' />
          </Switch>
          <Footer />
        </div>      
      

    );
  }  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));;
