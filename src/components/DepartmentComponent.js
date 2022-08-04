import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardHeader,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

const RenderDepartment = ({ department }) => {
  if (department != null)
    return (
      <Card className="mt-2 bg-light ">
        <CardHeader>
            <CardTitle>
                <h4>Phòng ban: {department.name}</h4>
            </CardTitle>
        </CardHeader>
        <CardBody>          
          <CardText>Nhân viên: {department.numberOfStaff}</CardText>
        </CardBody>
      </Card>
    );
  else return <div></div>;
};
const Department = (props) => {
  const department = props.departments.map((department) => {
    return (
      <div className="col-12 col-md-6 col-lg-4" key={department.id}>
        <div className="text-primary rounded-3">
          <RenderDepartment department={department} />
        </div>
      </div>
    );
  });
  if (props.isLoading) {
    return (
      <Loading />
    )    
  }
  else if (props.isFailed) {
    return (
      <h4>{props.isFailed}</h4>
    )
  }
  else
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
