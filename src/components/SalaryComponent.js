import React, { Component, Fragment, useState } from "react";
import { Button } from "reactstrap";
import dateFormat from "dateformat";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardFooter,
  CardHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
 
class Salary extends Component{
    constructor(props) {
        super(props);
        this.state = {
            staffList: props.staffs
        }
        this.salaryCalc = this.salaryCalc.bind(this);
        this.sortSalary = this.sortSalary.bind(this);
        this.resetSalarySort = this.resetSalarySort.bind(this);
    }
    salaryCalc(salaryScale, overTime) {
        const basicSalary = 3000000;
        const overTimeSalary = 200000;
        return parseInt(salaryScale * basicSalary + overTime * overTimeSalary);
        }
    sortSalary(sorttype) {        
        let sortedStaffList = this.state.staffList;        
        let vm = this;
        if (sorttype === "increase") {
            sortedStaffList.sort(function (a, b) {            
            return vm.salaryCalc(a.salaryScale, a.overTime) - vm.salaryCalc(b.salaryScale, b.overTime);
        });
    }
    
    if (sorttype === "decrease") {
        sortedStaffList.sort(function (a, b) {            
            return vm.salaryCalc(b.salaryScale, b.overTime) - vm.salaryCalc(a.salaryScale, a.overTime);
            });
        }
        this.setState({ staffList: sortedStaffList });
        console.log(this.state.staffList);
    }
    resetSalarySort() {
        //let vm = this;
        this.setState({staffList: this.props.staffs});
        console.log("props")
        console.log(this.props.staffs);
    }
    RenderSalary = (staff) => {
        let luong = this.salaryCalc(staff.salaryScale, staff.overTime);
        if (staff != null)
          return (
            <Card className="mt-2 bg-light">
              <CardHeader>
                <CardTitle>
                  <h4>Nhân viên: {staff.name}</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <CardText>Mã nhân viên: {staff.id}</CardText>
                <CardText>Hệ số lương: {staff.salaryScale}</CardText>
                <CardText>Số ngày làm thêm: {staff.overTime}</CardText>
                <CardFooter><b>Lương: {luong}</b></CardFooter>
              </CardBody>
            </Card>
          );
        else return <div></div>;
      };   
    render() {
    const salary = this.state.staffList.map((staff) => {
        return (
          <div className="col-md-4" key={staff.id}>
            <div className="bg-dark text-black rounded-3">
              {this.RenderSalary(staff)}
            </div>
          </div>
        );
      });
      return (
        <div className="container">
          <hr className="mt-3" />
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/homepage">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Salary Sheet</BreadcrumbItem>
          </Breadcrumb>
          <Button className="btn btn-success" onClick={() => this.sortSalary("increase")}>
            <span class="fa fa-sort-amount-asc"></span> Lương Thấp
          </Button>    
          <Button className="btn btn-success ms-4" onClick={() => this.sortSalary("decrease")}>
            <span class="fa fa-sort-amount-desc"></span> Lương Cao
          </Button>
          <Button className="btn btn-success ms-4" onClick={this.resetSalarySort}>
            <span class="fa fa-sort-amount-desc"></span> Reset
          </Button>
          <hr />
          <div className="row">{salary}</div>
        </div>
      );
    }   
};

export default Salary;
