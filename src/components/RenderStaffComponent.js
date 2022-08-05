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
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  FormGroup,
  Col,
  FormFeedback,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, Form, Errors, actions } from "react-redux-form";
import { Loading } from "./LoadingComponent";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

class RenderStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen_1: false,
      isModalOpen_2: false,
    };
    this.toggleModal_1 = this.toggleModal_1.bind(this);
    this.toggleModal_2 = this.toggleModal_2.bind(this);
    this.handleSubmit_1 = this.handleSubmit_1.bind(this);
    this.handleSubmit_2 = this.handleSubmit_2.bind(this);
  }
  toggleModal_1() {
    this.setState({
      isModalOpen_1: !this.state.isModalOpen_1,
    });
  }
  toggleModal_2() {
    this.setState({
      isModalOpen_2: !this.state.isModalOpen_2,
    });
  }

  handleSubmit_1(values) {
    this.setState({
      isModalOpen: !this.state.isModalOpen_1,
    });

    alert("Current State is: " + JSON.stringify(values));

    console.log(values);
    var x;
    if (values.department === "sale") {
      x ="Dept01";
    } else if (values.department === "hr") {
      x = "Dept02";
    } else if (values.department === "marketing") {
      x = "Dept03";
    } else if (values.department === "it") {
      x = "Dept04";
    } else if (values.department === "finance") {
      x = "Dept05";
    }
    //update Staff object as parameter for patchStaff function
    const updatedStaff = {
      id: this.props.staffId,
      name: values.name,
      doB: values.doB,
      startDate: values.startDate,
      departmentId: x,
      salaryScale: values.salaryScale,
      annualLeave: values.annualLeave,
      overTime: values.overTime,
      image: "/assets/images/alberto.png",
    };
    this.props.patchStaff({ updatedStaff });
    //this.props.resetAddStaffForm();
  }
  handleSubmit_2(values) {
    this.setState({
      isModalOpen_2: !this.state.isModalOpen_2,
    });
    alert("Current State is: " + JSON.stringify(values));

    console.log(values);
    var x;
    if (values.department === "sale") {
      x ="Dept01";
    } else if (values.department === "hr") {
      x = "Dept02";
    } else if (values.department === "marketing") {
      x = "Dept03";
    } else if (values.department === "it") {
      x = "Dept04";
    } else if (values.department === "finance") {
      x = "Dept05";
    }
    //update Staff object as parameter for patchStaff function
    const deletedStaff = {
      id: this.props.staffId,
      name: values.name,
      doB: values.doB,
      startDate: values.startDate,
      departmentId: x,
      salaryScale: values.salaryScale,
      annualLeave: values.annualLeave,
      overTime: values.overTime,
      image: "/assets/images/alberto.png",
    };
    this.props.deleteStaff({ deletedStaff });
    //this.props.resetAddStaffForm();
  }
  render() {
    if (this.props.staff != null && this.props.departments != null) {
      const department = this.props.departments.find(
        (department) => this.props.staff.departmentId === department.id
      );
      console.log(department);
      return (
        <Card key={this.props.staff.id} className="mt-2">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 p-0">
              <CardImg
                className="img-fluid"
                src={this.props.staff.image}
                alt={this.props.staff.name}
              />
            </div>
            <div className="col-12 col-md-8 col-lg-9 bg-dark text-warning rounded-3">
              <CardBody>
                <CardTitle>
                  <h4>Họ và tên: {this.props.staff.name}</h4>
                </CardTitle>
                <CardText>
                  Ngày sinh: {dateFormat(this.props.staff.doB, "dd/mm/yyyy")}
                </CardText>
                <CardText>
                  Ngày vào công ty:{" "}
                  {dateFormat(this.props.staff.startDate, "dd/mm/yyyy")}
                </CardText>
                <CardText>
                  Phòng ban: {
                    department && department.name // check null
                  }
                </CardText>
                <CardText>
                  Số ngày nghỉ còn lại: {this.props.staff.annualLeave}
                </CardText>
                <CardText>
                  Số ngày đã làm thêm: {this.props.staff.overTime}
                </CardText>
                <div className="row">
                  <div className="col-5">
                    <Button
                      className="w-100 btn btn-success"
                      color=""
                      onClick={this.toggleModal_1}
                    >
                      <i class="fa fa-wrench" aria-hidden="true"></i> Sửa
                    </Button>
                    <Modal
                      isOpen={this.state.isModalOpen_1}
                      toggle={this.toggleModal_1}
                    >
                      <ModalHeader toggle={this.toggleModal_1}>
                        Sửa nhân viên
                      </ModalHeader>
                      <Form
                        model="addStaff"
                        className=""
                        onSubmit={(values) => this.handleSubmit_1(values)}
                      >
                        <ModalBody>
                          <Row className="form-group mb-3">
                            <Label htmlFor="name" className="col-4">
                              Tên nhân viên
                            </Label>
                            <div className="col-8">
                              <Control.text
                                model=".name"
                                className="form-control"
                                id="name"
                                name="name"
                                validators={{
                                  required,
                                  minLength: minLength(3),
                                  maxLength: maxLength(30),
                                }}
                              />
                              <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                  required: "Required!",
                                  minLength:
                                    "Must be greater than 2 characters! ",
                                  maxLength: "Must be 30 characters or less! ",
                                }}
                              />
                            </div>
                          </Row>
                          <Row className="form-group mb-3">
                            <Label htmlFor="doB" className="col-4">
                              Ngày sinh
                            </Label>
                            <div className="col-8">
                              <Control
                                type="date"
                                model=".doB"
                                className="form-control"
                                id="doB"
                                name="doB"
                                value={this.state.tenState}
                                validators={{
                                  required,
                                }}
                              />
                              <Errors
                                className="text-danger"
                                model=".doB"
                                show="touched"
                                messages={{
                                  required: "Required!",
                                }}
                              />
                            </div>
                          </Row>
                          <Row className="form-group mb-3">
                            <Label htmlFor="startDate" className="col-4">
                              Ngày vào công ty
                            </Label>
                            <div className="col-8">
                              <Control
                                model=".startDate"
                                type="date"
                                className="form-control"
                                id="startDate"
                                name="startDate"
                                value={this.state.tenState}
                                validators={{
                                  required,
                                }}
                              />
                              <Errors
                                className="text-danger"
                                model=".startDate"
                                show="touched"
                                messages={{
                                  required: "Required!",
                                }}
                              />
                            </div>
                          </Row>
                          <Row className="form-group mb-3">
                            <Label htmlFor="department" className="col-4">
                              Phòng ban:
                            </Label>
                            <div className="col-8">
                              <Control.select
                                model=".department"
                                className="form-control"
                                id="department"
                                name="department"
                                validators={{
                                  required,
                                }}
                              >
                                <option value="">Choose department...</option>
                                <option value="sale">Sale</option>
                                <option value="hr">HR</option>
                                <option value="marketing">Marketing</option>
                                <option value="it">IT</option>
                                <option value="finance">Finance</option>
                              </Control.select>
                              <Errors
                                className="text-danger"
                                model=".department"
                                show="touched"
                                messages={{
                                  required: "Required!",
                                }}
                              />
                            </div>
                          </Row>
                          <Row className="form-group mb-3">
                            <Label htmlFor="salaryScale" className="col-6">
                              Hệ số lương
                            </Label>
                            <div className="col-6">
                              <Control
                                model=".salaryScale"
                                type="number"
                                step="0.1"
                                className="form-control"
                                id="salaryScale"
                                name="salaryScale"
                                validators={{
                                  required,
                                }}
                              />
                              <Errors
                                className="text-danger"
                                model=".salaryScale"
                                show="touched"
                                messages={{
                                  required: "Required!",
                                }}
                              />
                            </div>
                          </Row>
                          <Row className="form-group mb-3">
                            <Label htmlFor="annualLeave" className="col-6">
                              Số ngày nghỉ còn lại
                            </Label>
                            <div className="col-6">
                              <Control
                                model=".annualLeave"
                                type="number"
                                step="0.5"
                                className="form-control"
                                id="annualLeave"
                                name="annualLeave"
                                validators={{
                                  required,
                                }}
                              />
                              <Errors
                                className="text-danger"
                                model=".annualLeave"
                                show="touched"
                                messages={{
                                  required: "Required!",
                                }}
                              />
                            </div>
                          </Row>
                          <Row className="form-group">
                            <Label htmlFor="overTime" className="col-6">
                              Số ngày đã làm thêm
                            </Label>
                            <div className="col-6">
                              <Control.text
                                model=".overTime"
                                type="number"
                                step="0.5"
                                className="form-control"
                                id="overTime"
                                name="overTime"
                                validators={{
                                  required,
                                }}
                              />
                              <Errors
                                className="text-danger"
                                model=".overTime"
                                show="touched"
                                messages={{
                                  required: "Required!",
                                }}
                              />
                            </div>
                          </Row>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            type="submit"
                            color="primary" /* onClick={this.toggleModal_1} */
                          >
                            Confirm
                          </Button>{" "}
                          <Button color="danger" onClick={this.toggleModal_1}>
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Form>
                    </Modal>
                  </div>
                  <div className="col-5">
                    <Button
                      className="w-100 btn btn-danger"
                      color=""
                      onClick={this.toggleModal_2}
                    >
                      <i class="fa fa-trash-o" aria-hidden="true"></i> Xóa
                    </Button>
                    <Modal
                      isOpen={this.state.isModalOpen_2}
                      toggle={this.toggleModal_2}
                    >
                      <ModalHeader toggle={this.toggleModal}>
                        Bạn có muốn xóa nhân viên này?
                      </ModalHeader>
                      <Form
                        model="addStaff"
                        className=""
                        onSubmit={(values) => this.handleSubmit_2(values)}
                      >                          
                        <ModalFooter>
                          <Button
                            type="submit"
                            color="primary" /* onClick={this.toggleModal} */
                          >
                            Confirm
                          </Button>{" "}
                          <Button color="danger" onClick={this.toggleModal_2}>
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Form>
                    </Modal>
                  </div>
                </div>
              </CardBody>
            </div>
          </div>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }
}
export default RenderStaff;
