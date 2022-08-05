import React, { Component } from "react";
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
import RenderStaff from "./RenderStaffComponent";

class StaffDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isLoading) {
      return <Loading />;
    } else if (this.props.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{this.props.errMess}</h4>
          </div>
        </div>
      );
    } else if (this.props.staff != null) {
      return (
        <div className="container">
          <div className="row">
            <hr className="mt-3" />
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="/employee">Staff list</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{this.props.staff.name}</BreadcrumbItem>
            </Breadcrumb>
            <RenderStaff
              staff={this.props.staff}
              departments={this.props.departments}
              patchStaff={this.props.patchStaff}
              staffId={this.props.staffId}
              deleteStaff={this.props.deleteStaff}
            />
          </div>
        </div>
      );
    }
  }
}

export default StaffDetail;
