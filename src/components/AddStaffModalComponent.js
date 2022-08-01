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
  FormFeedback
} from "reactstrap";

class AddStaffModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      fullName: "",
      doB: "",
      startDate: "",
      department: "",
      salaryScale: "",
      annualLeave: "",
      overTime: "",
      image: '/assets/images/alberto.jpg',
      touched: {
        fullName: false,
        doB: false,
        startDate: false,
        department: false,
        salaryScale: false,
        annualLeave: false,
        overTime: false
      }
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    alert("okie");
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: {...this.state.touched, [field]: true}
    });
  }
  validate(fullName, doB, salaryScale, annualLeave, overTime) {
    const err = {
      fullName: '',
      doB: '',
      salaryScale: '',
      annualLeave: '',
      overTime: ''
    }
    if(this.state.touched.fullName && fullName < 3) {
      err.fullName = "Fullname should be >= 3 characters!";
    }
    else if (this.state.touched.doB && new Date().getFullYear() - doB.getFullYear() < 18) {
      err.fullName = "Employee must be >= 18 years old!"
    }
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
          <Form className="" onSubmit={this.handleSubmit}>
            <ModalBody>
              <FormGroup className="row">
                <Label htmlFor="fullName" className="col-4">
                  Tên nhân viên
                </Label>
                <div className="col-8">
                  <Input
                    type="text"
                    className="col-6"
                    id="fullName"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.handleInputChange}
                  />
                </div>
              </FormGroup>
              <FormGroup className="row">
                <Label htmlFor="doB" className="col-4">
                  Ngày sinh
                </Label>
                <div className="col-8">
                  <Input
                    type="date"
                    className=""
                    id="doB"
                    name="doB"
                    value={this.state.doB}
                    onChange={this.handleInputChange}
                  />
                </div>
              </FormGroup>
              <FormGroup className="row">
                <Label htmlFor="startDate" className="col-4">
                  Ngày vào công ty
                </Label>
                <div className="col-8">
                  <Input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={this.state.startDate}                    
                    onChange={this.handleInputChange}
                  />
                </div>
              </FormGroup>
              <FormGroup className="row">
                <Label htmlFor="department" className="col-4">
                  Phòng ban:
                </Label>
                <div className="col-8">
                  <select
                    className="form-control"
                    id="department"
                    name="department"
                    value={this.state.department}
                    onChange={this.handleInputChange}
                  >
                    <option value="sale">Sale</option>
                    <option value="hr">HR</option>
                    <option value="marketing">Marketing</option>
                    <option value="it">IT</option>
                    <option value="finance">Finance</option>
                  </select>
                </div>
              </FormGroup>
              <FormGroup className="row">
                <Label htmlFor="salaryScale" className="col-6">
                  Hệ số lương
                </Label>
                <div className="col-6">
                  <Input
                    type="number"
                    step="0.1"
                    className="form-control"
                    id="salaryScale"
                    name="salaryScale"
                    value={this.state.salaryScale}
                    onChange={this.handleInputChange}
                  />
                </div>
              </FormGroup>
              <FormGroup className="row">
                <Label htmlFor="annualLeave" className="col-6">
                  Số ngày nghỉ còn lại
                </Label>
                <div className="col-6">
                  <Input
                    type="number"
                    step="0.5"
                    className="form-control"
                    id="annualLeave"
                    name="annualLeave"
                    value={this.state.annualLeave}
                    onChange={this.handleInputChange}
                  />
                </div>
              </FormGroup>
              <FormGroup className="row">
                <Label htmlFor="overTime" className="col-6">
                  Số ngày đã làm thêm
                </Label>
                <div className="col-6">
                  <Input
                    type="number"
                    step="0.5"
                    className="form-control"
                    id="overTime"
                    name="overTime"
                    value={this.state.overTime}
                    onChange={this.handleInputChange}
                  />
                </div>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="primary" onClick={this.toggleModal}>
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
