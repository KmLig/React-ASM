import React, { Component } from "react";
import dateFormat from "dateformat";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null,
      selectedCol: "col-6 mt-1",
    };
    this.onColSelect = this.onColSelect.bind(this);
  }

  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }
  onColSelect(event) {
    this.setState({selectedCol: event.target.value });
  }
 
  renderStaff(staff) {
    if (staff != null)
      return (
        <Card className="mt-2">
          <div className="row">
            <div className="col-9 bg-dark text-warning rounded-3">
              <CardBody>
                <CardTitle>
                  <h4>Họ và tên: {staff.name}</h4>
                </CardTitle>
                <CardText>
                  Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                </CardText>
                <CardText>
                  Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                </CardText>
                <CardText>Phòng ban: {staff.department.name}</CardText>
                <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
              </CardBody>
            </div>
            <div className="col-3">
              <CardImg className="" src={staff.image} alt={staff.name} />
            </div>
          </div>
        </Card>
      );
    else return <div></div>;
  }

  render() {
    const menu = this.props.staffs.map((staff) => {
      return (
        <div className={this.state.selectedCol}>
          <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
            <CardBody>
              <CardTitle>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className="container p-2 rounded-3 mt-2">
        <div className="row bg-warning p-4 rounded-3">
          <div className="col-4">
          <h4>Chọn giao diện phù hợp:</h4>
          </div>
          <div className="col-8">
          <select class="form-control" value={this.state.value} onChange={this.onColSelect}>
            <option value="col-6 mt-1">2 cột</option>
            <option value="col-4 mt-2">3 cột</option>
            <option value="col-3 mt-3">4 cột</option>
          </select>
          </div>          
        </div>
        <hr/>
        <div className="row bg-info p-4 rounded-3">{menu}</div>
        <div className="row">
          <div className="col-12 m-1">
            {this.renderStaff(this.state.selectedStaff)}
          </div>
        </div>
      </div>
    );
  }
}

export default StaffList;
