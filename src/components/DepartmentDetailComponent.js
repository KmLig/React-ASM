import React from "react";
import dateFormat from "dateformat";
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
import { Loading } from "./LoadingComponent";

const renderStaffList = (a) => {
  const staffList = a.map((staff) => {
    return (
      <div className="col-4 mb-3">
        <Card key={staff.id} >
            <CardBody>
              <CardImg className="" src={staff.image} alt={staff.name} />
              <CardTitle className="text-center">
                <i class="fa fa-user-circle" aria-hidden="true"></i>{" "}
                {staff.name}
              </CardTitle>
            </CardBody>
        </Card>
      </div>
    );
  });
  return staffList;
}
const DepartmentDetail = (props) => {
  if (props.department != null) {   
    const phongban = props.department[0]
    return (
      <div className="container">
        <div className="row">
          <hr className="mt-3" />
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/department">Department</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{phongban && phongban.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="row">
            {renderStaffList(props.staffs)}
          </div>
        </div>
      </div>
    );
  }
};

export default DepartmentDetail;
