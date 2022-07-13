import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const RenderDepartment = ({ department }) => {
  console.log(department);
  console.log(department.name);
  if (department != null)
    return (
      <Card className="mt-2">
        <CardBody>
          <CardTitle>
            <h4>Phòng ban: {department.name}</h4>
          </CardTitle>
          <CardText>Nhân viên: {department.numberOfStaff}</CardText>
        </CardBody>
      </Card>
    );
  else return <div></div>;
};
const Department = (props) => {
  const department = props.departments.map((department) => {
    return (
      <div className="col-md-4" key={department.id}>
        <div className="bg-dark text-info rounded-3">
          <RenderDepartment department={department} />
        </div>
      </div>
    );
  });
  return (
    <div className="container">
        <hr className="mt-3"/>
            <Breadcrumb>      
                <BreadcrumbItem><Link to='/homepage'>Home</Link></BreadcrumbItem>      
                <BreadcrumbItem active>Department</BreadcrumbItem>
            </Breadcrumb>
        <div className="row">        
            {department}
        </div>
    </div>
  )
};

export default Department;
