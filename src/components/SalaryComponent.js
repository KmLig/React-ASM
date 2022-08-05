import React, { Component } from "react";
import { Button } from "reactstrap";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardFooter,
  CardHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';

class Salary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: this.props.salaries
    };    
    this.sortSalary = this.sortSalary.bind(this);
    this.resetSalarySort = this.resetSalarySort.bind(this);
  }
  /* salaryCalc(salaryScale, overTime) {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    return parseInt(salaryScale * basicSalary + overTime * overTimeSalary);
  } */
  sortSalary(sortType) {
    let sortedStaffList = [...this.state.staffList];
    // let vm = this;
    if (sortType === "increase") {
      sortedStaffList.sort(function (a, b) {
        return (a.salary - b.salary);
      });
    }

    if (sortType === "decrease") {
      sortedStaffList.sort(function (a, b) {
        return (b.salary - a.salary);
      });
    }
    this.setState({ staffList: sortedStaffList });
    console.log(this.state.staffList);
  }
  resetSalarySort() {
    this.setState({ staffList: this.props.salaries });
    console.log("props");
    console.log(this.props.salaries);
  }
  RenderSalary = (staffSalary) => {
    if (staffSalary != null)
      return (
        <Card className="mt-3 bg-light">
          <CardHeader>
            <CardTitle>
              Nhân viên: {staffSalary.name}
            </CardTitle>
          </CardHeader>
          <CardBody>
            <CardText>Mã nhân viên: {staffSalary.id}</CardText>
            <CardText>Hệ số lương: {staffSalary.salaryScale}</CardText>
            <CardText>Số ngày làm thêm: {staffSalary.overTime}</CardText>
            <CardFooter>
              <b>Lương: {staffSalary.salary}</b>
            </CardFooter>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  };
  render() {
    const salary = this.state.staffList.map((staffSalary) => {
      return (
        <div className="col-12 col-md-6 col-lg-4" key={staffSalary.id}>
          <div className="bg-dark text-black rounded-3">
            {this.RenderSalary(staffSalary)}
          </div>
        </div>
      );
    });
    if (this.props.isLoading) {
      return (
        <Loading />
      )    
    }
    else if (this.props.isFailed) {
      return (
        <h4>{this.props.isFailed}</h4>
      )
    }
    else {
      return (
        <div className="container">
          <hr className="mt-3" />
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/homepage">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Salary Sheet</BreadcrumbItem>
          </Breadcrumb>
          <Button
            className="btn btn-success"
            onClick={() => this.sortSalary("increase")}
          >
            <span class="fa fa-sort-amount-asc"></span> Lương Thấp
          </Button>
          <Button
            className="btn btn-success ms-4"
            onClick={() => this.sortSalary("decrease")}
          >
            <span class="fa fa-sort-amount-desc"></span> Lương Cao
          </Button>
          <Button className="btn btn-danger ms-5" onClick={this.resetSalarySort}>
            <span class="fa fa-refresh"></span> Reset
          </Button>
          <hr />
          <div className="row">{salary}</div>
        </div>
      );
    }
    
  }
}

export default Salary;
