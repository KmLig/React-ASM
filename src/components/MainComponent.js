import React, { Component } from "react";
import Home from "./HomeComponent";
import StaffList from "./StaffListComponent";
import Department from "./DepartmentComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffDetail from "./StaffDetailComponent";
import Salary from "./SalaryComponent";
import SearchStaff from "./SearchStaffComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  addStaff,
  fetchDepartments,
  fetchStaffs,
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
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
            path="/department"
            component={() => (
              <Department
                departments={this.props.departments.departments}
                isLoading={this.props.departments.isLoading}
                isFailed={this.props.departments.errMess}
              />
            )}
          />
          <Route
            path="/salary"
            component={() => <Salary staffs={this.props.staffs.staffs} />}
          />
          <Redirect to="/homepage" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
