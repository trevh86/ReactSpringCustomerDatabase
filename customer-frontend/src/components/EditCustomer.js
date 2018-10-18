import React, { Component } from "react";
import SkyLight from 'react-skylight';

export default class EditCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.customer.firstName,
      lastName: this.props.customer.lastName,
      dateOfBirth: this.props.customer.dateOfBirth,
      username: this.props.customer.username,
      password: this.props.customer.password
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const editedCustomer = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dateOfBirth: this.state.dateOfBirth,
      username: this.state.username,
      password: this.state.password
    };
    this.props.updateCustomer(this.props.link, editedCustomer);
    this.simpleDialog.hide();
    document.getElementById("activityForm").reset();
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-link"
          onClick={() => this.simpleDialog.show()}
        >
          Edit
        </button>
        <SkyLight
          hideOnOverlayClicked
          ref={ref => (this.simpleDialog = ref)}
          title="Edit"
        >
          <form id="activityForm">
            <div className="form-group">
              <input
                placeholder="firstName"
                type="text"
                value={this.state.firstName}
                className="form-control"
                name="firstName"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="lastName"
                type="text"
                value={this.state.lastName}
                className="form-control"
                name="lastName"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="dateOfBirth"
                type="text"
                value={this.state.dateOfBirth}
                className="form-control"
                name="dateOfBirth"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="username"
                type="text"
                value={this.state.username}
                className="form-control"
                name="username"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="password"
                type="text"
                value={this.state.password}
                className="form-control"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-primary" onClick={this.handleSubmit}>
              Save
            </button>
          </form>
        </SkyLight>
      </div>
    );
  }
}