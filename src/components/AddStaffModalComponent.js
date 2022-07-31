import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input, FormGroup } from 'reactstrap';

const AddStaffModal = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className='w-100 btn btn-outline-danger' color="" onClick={toggle}><i class="fa fa-plus-circle" aria-hidden="true"></i> Thêm</Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Thêm nhân viên</ModalHeader>
        <ModalBody>
          <Form className="">
            <FormGroup className='row'>
              <Label className='col-4'>Tên nhân viên</Label>
              <div className='col-8'>
                <Input type='text' className='col-6 ' />
              </div>
            </FormGroup>
            <FormGroup className='row'>
              <Label className='col-4'>Ngày sinh</Label>
              <div className='col-8'>
                <Input type='date' className=''/>
              </div>
            </FormGroup>
            <FormGroup className='row'>
              <Label className='col-4'>Ngày vào công ty</Label>
              <div className='col-8'>
                <Input type='date' />
              </div>
            </FormGroup>
            <FormGroup className='row'>
              <Label className='col-4'>Phòng ban:</Label>
              <div className='col-8'>
                <select className='form-control'>
                  <option selected>Choose...</option>
                  <option value="sale">Sale</option>
                  <option value="hr">HR</option>
                  <option value="marketing">Marketing</option>
                  <option value="it">IT</option> 
                  <option value="finance">Finance</option> 
                </select>
              </div>
            </FormGroup>
            <FormGroup className='row'>
              <Label className='col-6'>Hệ số lương</Label>
              <div className='col-6'>
                <Input type='number' step='0.1' className='form-control' />
              </div>
            </FormGroup>
            <FormGroup className='row'>
              <Label className='col-6'>Số ngày nghỉ còn lại</Label>
              <div className='col-6'>
                <Input type='number' step='0.5' className='form-control' />
              </div>
            </FormGroup>
            <FormGroup className='row'>
              <Label className='col-6'>Số ngày đã làm thêm</Label>
              <div className='col-6'>
                <Input type='number' step='0.1' className='form-control' />
              </div>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Confirm</Button>{' '}
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddStaffModal;