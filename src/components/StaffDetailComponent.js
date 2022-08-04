import React from "react";
import dateFormat from "dateformat";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderStaff({ staff }) {
  if (staff != null)
    return (
      <Card key={staff.id} className="mt-2">
        <div className="row">
        <div className="col-12 col-md-4 col-lg-3 p-0">
            <CardImg className="img-fluid" src={staff.image} alt={staff.name} />
          </div>
          <div className="col-12 col-md-8 col-lg-9 bg-dark text-warning rounded-3">
            <CardBody>
              <CardTitle>
                <h4>Họ và tên: {staff.name}</h4>
              </CardTitle>
              <CardText>
                Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
              </CardText>
              <CardText>
                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
              </CardText>
              <CardText>Phòng ban: {staff.departmentId}</CardText>
              <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
              <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
            </CardBody>
          </div>          
        </div>
      </Card>
    );
  else return <div></div>;
}
const StaffDetail = (props) => {
  if (props.isLoading) {
    return(
     <Loading />
    )
  }
  else if (props.errMess) {
    return(
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    )
  }
  else if (props.staff != null) {
    return (
      <div className="container">
        <div className="row">
            <hr className="mt-3"/>
            <Breadcrumb>      
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>      
                <BreadcrumbItem><Link to="/employee">Staff list</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
            </Breadcrumb>
            <RenderStaff staff={props.staff} />
        </div>
      </div>
    );
  }
};

export default StaffDetail;
