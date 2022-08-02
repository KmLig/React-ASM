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

class AddStaffModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false      
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(values) {
    alert("Current State is: " + JSON.stringify(values));
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
              <Row className="form-group">
                <Label htmlFor="fullName" className="col-4">
                  Tên nhân viên
                </Label>
                <div className="col-8">
                  <Control.text
                    model=".fullName"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    onChange={this.handleInputChange}
                  />
                </div>
              </Row>
              <Row className="form-group">
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
                  />
                </div>
              </Row>
              <Row className="form-group">
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
                  />
                </div>
              </Row>
              <Row className="form-group">
                <Label htmlFor="department" className="col-4">
                  Phòng ban:
                </Label>
                <div className="col-8">
                  <Control.select
                    model='.department'
                    className="form-control"
                    id="department"
                    name="department"
                  >
                    <option value="">Choose department...</option>
                    <option value="sale">Sale</option>
                    <option value="hr">HR</option>
                    <option value="marketing">Marketing</option>
                    <option value="it">IT</option>
                    <option value="finance">Finance</option>
                  </Control.select>
                </div>
              </Row>
              <Row className="form-group">
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
                    value={this.state.salaryScale}
                  />
                </div>
              </Row>
              <Row className="form-group">
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
                    value={this.state.annualLeave}
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
                    value={this.state.overTime}
                  />
                </div>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="primary" onClick={this.toggleModal}>
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
