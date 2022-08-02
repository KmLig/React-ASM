import React, { Component, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  Input,
  FormGroup,
  Col,
  FormFeedback,
  Row
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
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
    alert("Current State is: " + JSON.stringify(values));
    console.log(values);
    this.props.addNewStaff(values);
    // event.preventDefault();
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
          <LocalForm className="" onSubmit={(values) => this.handleSubmit(values)}>
            <ModalBody>
              <Row className="form-group mb-3">
                <Label htmlFor="fullName" className="col-4">
                  Tên nhân viên
                </Label>
                <div className="col-8">
                  <Control.text
                    model=".fullName"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(30)
                    }}
                    />   
                  <Errors 
                  className="text-danger"
                  model=".fullName"
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
                      required,
                    }}
                    />   
                  <Errors 
                  className="text-danger"
                  model=".salaryScale"
                  show="touched"
                  messages={{
                    required: "Required!"
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
                    required: "Required!"
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
          </LocalForm>
        </Modal>
      </div>
    );
  }
}

export default AddStaffModal;
