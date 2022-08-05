import React, { Component } from "react";
import { TabPane } from "reactstrap";

class Reservation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isGoing: false,
            numberOfGuests: 0
        }
    }

    handleInputChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
        )
    }
}
export default Reservation;