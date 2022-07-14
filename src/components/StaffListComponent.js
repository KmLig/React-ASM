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
  Input,
  Form,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null,
      selectedCol: "col-2 mt-3",
      search: "",
    };
    this.onColSelect = this.onColSelect.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }
  onColSelect(event) {
    this.setState({ selectedCol: event.target.value });
  }
  onSearchChange(e) {
    this.setState({ search: e.target.value });
  }

  renderStaffList(a) {
    console.log("okie");
    const staffList = a.map((staff) => {
      console.log(staff.name);
      return (
        <div className={this.state.selectedCol}>
          <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
            <Link to={`/employee/${staff.id}`}>
              <CardBody>
                <CardImg className="" src={staff.image} alt={staff.name} />
                <CardTitle className="text-center">
                  <i class="fa fa-user-circle" aria-hidden="true"></i>{" "}
                  {staff.name}
                </CardTitle>
              </CardBody>
            </Link>
          </Card>
        </div>
      );
    });
    return staffList;
  }

  render() {
    const { search } = this.state;
    const filteredStaff = this.props.staffs.filter((staff) => {
      return staff.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    console.log(filteredStaff);
    //#region  const staffList
    /*const staffList = this.props.staffs.map((staff) => {
      return (
        <div className={this.state.selectedCol}>
          <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
          <Link to={`/employee/${staff.id}`}>
            <CardBody>
              <CardImg className="" src={staff.image} alt={staff.name} />
              <CardTitle className="text-center"><i class="fa fa-user-circle" aria-hidden="true"></i> {staff.name}</CardTitle>
            </CardBody>
            </Link>
          </Card>
        </div>
      );
    });*/
    //#endregion

    return (
      <div className="container rounded-3">
        <hr className="mt-3" />
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/homepage">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Staff list</BreadcrumbItem>
        </Breadcrumb>
        <div className="row bg-warning p-4 rounded-3">
          <div className="col-12 col-md-6">
            <Form className="d-flex me-5" role="search">
              <Input
                onChange={this.onSearchChange}
                className="form-control"
                type="search"
                placeholder="Nhập tên nhân viên"
                aria-label="Search"
              />
              <Button className="btn btn-success" type="submit">
                Search
              </Button>
            </Form>
          </div>
          <div className="col-12 col-md-6 pull-left">
            <div className="row">
              <div className="col-6">
                <h4>
                  <i class="fa fa-tasks" aria-hidden="true"></i> Chọn giao diện:
                </h4>
              </div>
              <div className="col-6">
                <select
                  class="form-control"
                  value={this.state.value}
                  onChange={this.onColSelect}
                >
                  <option value="col-2 mt-3">6 cột</option>
                  <option value="col-3 mt-3">4 cột</option>
                  <option value="col-4 mt-2">3 cột</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row bg-info p-4 rounded-3">
          {this.renderStaffList(filteredStaff)}
        </div>
      </div>
    );
  }
}

export default StaffList;
