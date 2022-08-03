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
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { Link } from "react-router-dom";
import AddStaffModal from "./AddStaffModalComponent";

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null,
      selectedCol: "col-6 col-md-4 col-lg-2 mt-3",
      search: "",
    };
    this.onColSelect = this.onColSelect.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.input = React.createRef();
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }
  onColSelect(event) {
    this.setState({ selectedCol: event.target.value });
  }
  onSearchChange(event) {
    console.log(this.searchStaff.value);
    this.setState({ search: event.target.value });
  }

  renderStaffList(a) {
    const staffList = a.map((staff) => {
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
    // object destructuring
    const { search } = this.state;
    //trả về mỗi staff trong mảng nếu có chứa từ khóa trong search
    const filteredStaff = this.props.staffs.filter((staff) => {
      return staff.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });   

    return (
      <div className="container rounded-3">
        <hr className="mt-3" />
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/homepage">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Staff list</BreadcrumbItem>
        </Breadcrumb>
        <div className="row rounded-3">
          <div className="col-12 p-4 col-lg-2 bg-warning rounded-3 mb-2">            
            <AddStaffModal addNewStaff={(values) => this.props.addNewStaff(values)}/>
          </div>
          <div className="col-12 p-4 col-lg-5 offset-lg-1 bg-success rounded-3 mb-2">
            <Form className="d-flex" role="search">
              <Input
                onChange={this.onSearchChange}
                className="form-control"
                type="search"
                id="searchStaff"
                name="searchStaff"
                placeholder=" Nhập tên nhân viên... 🔍 "
                aria-label="Search"
                innerRef={(input) => this.searchStaff = input} 
              />
            </Form>
          </div>
          <div className="col-12 p-4 col-lg-3 offset-lg-1 d-none d-lg-block bg-warning rounded-3 mb-2">
            <select
              class="form-control"
              value={this.state.value}
              onChange={this.onColSelect}
            >
              <option value="col-2 mt-3">Chọn giao diện: 6 cột </option>
              <option value="col-3 mt-3">Chọn giao diện: 4 cột </option>
              <option value="col-4 mt-2">Chọn giao diện: 2 cột </option>
            </select>
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
