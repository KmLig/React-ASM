import React, { Component } from "react";
import Home from "./HomeComponent";
import StaffList from "./StaffListComponent";
import Department from "./DepartmentComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffDetail from "./StaffDetailComponent";
import DepartmentDetaiComponent from "./DepartmentDetailComponent";
import Salary from "./SalaryComponent";
import SearchStaff from "./SearchStaffComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  addStaff,
  fetchDepartments,
  fetchSalaries,
  fetchStaffs,
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    salaries: state.salaries,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addStaff: ({ newStaff }) => dispatch(addStaff({ newStaff })),
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchDepartments: () => {
    dispatch(fetchDepartments());
  },
  fetchSalaries: () => {
    dispatch(fetchSalaries());
  },
  resetAddStaffForm: () => {
    dispatch(actions.reset("addStaff"));
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartments();
    this.props.fetchSalaries();
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            this.props.staffs.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
          isLoading={this.props.staffs.isLoading}
          errMess={this.props.staffs.errMess}
          departments={this.props.departments.departments}
        />
      );
    };
    const DepartmentWithId = ({ match }) => {
      console.log(match.params.departmentId);
      const staff_de = this.props.staffs.staffs.filter(
        (staff) => staff.departmentId === match.params.departmentId
      )
      console.log(staff_de)
      return (
        <DepartmentDetaiComponent
          staffs={
            this.props.staffs.staffs.filter(
              (staff) => staff.departmentId === match.params.departmentId
            )
          }
          isLoading={this.props.staffs.isLoading}
          errMess={this.props.staffs.errMess}
          department={this.props.departments.departments.filter((department) => department.id === match.params.departmentId) }
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/homepage" component={Home} />
          <Route
            exact
            path="/employee"
            component={() => (
              <StaffList
                staffs={this.props.staffs.staffs}
                addStaff={this.props.addStaff}
                departments={this.props.departments.departments}
                staffsLoading={this.props.staffs.isLoading}
                staffFailed={this.props.staffs.errMess}
                resetAddStaffForm={this.props.resetAddStaffForm}
              />
            )}
          />
          <Route path="/employee/:staffId" component={StaffWithId} />
          <Route
            path="/searchstaff"
            component={() => <SearchStaff staff={this.props.staffs.staffs} />}
          />
          <Route
            exact
            path="/department"
            component={() => (
              <Department
                departments={this.props.departments.departments}
                isLoading={this.props.departments.isLoading}
                isFailed={this.props.departments.errMess}
              />
            )}
          />
          <Route path="/department/:departmentId" component={DepartmentWithId} />
          <Route
            path="/salary"
            component={() => (
              <Salary
                staffs={this.props.staffs.staffs}
                salaries={this.props.salaries.salaries}
                isLoading={this.props.salaries.isLoading}
                isFailed={this.props.salaries.errMess}
              />
            )}
          />
          <Redirect to="/homepage" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
