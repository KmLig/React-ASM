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
            <FormGroup className=''>
              <Label className=''>Tên nhân viên</Label>
              <Input type='text' className='form-control' />
            </FormGroup>
            <FormGroup className=''>
              <Label>Ngày sinh</Label>
              <Input type='date' className=''/>
            </FormGroup>
            <FormGroup>
              <Label>Ngày vào công ty</Label>
              <Input type='date' />
            </FormGroup>
            <FormGroup>
            <Label>Phòng ban:</Label>
              <select className='form-control'>
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </FormGroup>
            <FormGroup className=''>
              <Label className=''>Hệ số lương</Label>
              <Input type='number' step='0.1' className='form-control' />
            </FormGroup>
            <FormGroup className=''>
              <Label className=''>Số ngày nghỉ còn lại</Label>
              <Input type='number' step='0.5' className='form-control' />
            </FormGroup>
            <FormGroup className=''>
              <Label className=''>Số ngày đã làm thêm</Label>
              <Input type='number' step='0.1' className='form-control' />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Confirm</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddStaffModal;