import React, { Component, useState } from "react";
import {
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
  Row
} from "reactstrap";
import { Control, Form, Errors, acitons } from "react-redux-form";
import { STAFFS } from "../shared/staff";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)
const isNumber = (val) => !isNaN(Number(val));

class AddStaffModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,      
      
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addNewStaff() {
    const staffs = STAFFS;
    console.log(staffs);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(values) {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
    this.props.resetAddStaffForm();
    alert("Current State is: " + JSON.stringify(values));

    console.log(values);
    let x = 0;
    if(values.department === "hr") {
      x = 1;
    }
    else if (values.department === "marketing") {
      x = 2;
    }
    else if (values.department === "it") {
      x = 3;
    }
    else if (values.department === "finance") {
      x = 4;
    }
    //create newStaff object as parameter for addStaff function
    const newStaff = {
      id: this.props.id,
      name: values.name,
      doB: values.doB,
      startDate: values.startDate,
      department: this.props.departments[x],
      salaryScale: values.salaryScale,
      annualLeave: values.annualLeave,
      overTime: values.overTime,
      image: '/assets/images/alberto.jpg'
    }
    this.props.addStaff({newStaff})
  }

  render() {
    return (
      <div>
        <Button
          className="w-100 btn btn-outline-danger"
          color=""
          onClick={this.toggleModal}
        >
          <i class="fa fa-plus-circle" aria-hidden="true"></i> Thêm
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
          <Form model="addStaff" className="" onSubmit={(values) => this.handleSubmit(values)}>
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
                      maxLength: maxLength(30)
                    }}
                    />   
                  <Errors 
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "Required!",
                    minLength: "Must be greater than 2 characters! ",
                    maxLength: "Must be 30 characters or less! "
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
                      required
                    }}              
                  />
                  <Errors 
                    className="text-danger"
                    model=".doB"
                    show="touched"
                    messages={{
                      required: "Required!"
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
                      required
                    }}   
                  />
                  <Errors 
                    className="text-danger"
                    model=".startDate"
                    show="touched"
                    messages={{
                      required: "Required!"
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
                    model='.department'
                    className="form-control"
                    id="department"
                    name="department"
                    validators={{
                      required
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
                      required: "Required!"
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
                      required
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
                      required
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
                    required: "Required!"
                  }}
                  />
                </div>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="primary" /* onClick={this.toggleModal} */>
                Confirm
              </Button>{" "}
              <Button color="danger" onClick={this.toggleModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default AddStaffModal;
