import React, { Component, Fragment } from "react";
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
} from "reactstrap";
import { Link } from 'react-router-dom';



const RenderSalary = ({ staff }) => {
    console.log(staff);
    console.log(staff.name);
    let luong = 30000 * parseFloat(staff.salaryScale) + 20000* parseFloat(staff.overTime);
    if (staff != null)
      return (
        <Card className="mt-2">
          <CardBody>
            <CardTitle>
              <h4>Nhân viên: {staff.name}</h4>
            </CardTitle>
            <CardText>Mã nhân viên: {staff.id}</CardText>
            <CardText>Hệ số lương: {staff.salaryScale}</CardText>
            <CardText>Số ngày làm thêm: {staff.overTime}</CardText>
            <CardFooter>Lương: {luong}</CardFooter>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  };
  const Salary = (props) => {
    const salary = props.staffs.map((staff) => {
      return (
        <div className="col-md-4" key={staff.id}>
          <div className="bg-dark text-black rounded-3">
            <RenderSalary staff={staff} />
          </div>
        </div>
      );
    });
    return (
      <div className="container">
          <hr className="mt-3"/>
              <Breadcrumb>      
                  <BreadcrumbItem><Link to='/employee'>Nhân viên</Link></BreadcrumbItem>      
                  <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
              </Breadcrumb>
          <div className="row">        
              {salary}
          </div>
      </div>
    )
  };
  
  export default Salary;
