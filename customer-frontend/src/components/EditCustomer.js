import React, { Component } from "react";
import SkyLight from "react-skylight";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
    document.getElementById("customerForm").reset();
  };

  cancelSubmit = event => {
    event.preventDefault();
    this.simpleDialog.hide();
  };

  render() {
    return (
      <div>
        <Button
          size='small'
          variant='text'
          color='primary'
          onClick={() => this.simpleDialog.show()}
        >
          Edit
        </Button>
        <SkyLight
          hideOnOverlayClicked
          ref={ref => (this.simpleDialog = ref)}
          title="Edit"
        >
          <form id="customerForm">
              <TextField
                label='First Name'
                placeholder="First Name"
                type="text"
                value={this.state.firstName}
                className="form-control"
                name="firstName"
                onChange={this.handleChange}
              />
            <br/>
            <TextField
              label='Last Name'
              placeholder="Last Name"
                type="text"
                value={this.state.lastName}
                className="form-control"
                name="lastName"
                onChange={this.handleChange}
              />
            <br/>
            <TextField
              label='Date of Birth'
              placeholder="01.01.1900"
                type="text"
                value={this.state.dateOfBirth}
                className="form-control"
                name="dateOfBirth"
                onChange={this.handleChange}
              />
            <br/>
            <TextField
              label='Username'
              placeholder="Username"
                type="text"
                value={this.state.username}
                className="form-control"
                name="username"
                onChange={this.handleChange}
              />
            <br/>
            <TextField
              label='Password'
              placeholder="Password"
                type="text"
                value={this.state.password}
                className="form-control"
                name="password"
                onChange={this.handleChange}
              />
            <br/>
            <div style={{margin: 10}}>
              <Button variant='outlined' color='primary' style={{marginRight: 10}} onClick={this.handleSubmit}>Save</Button>
              <Button variant='outlined' color='secondary' onClick={this.cancelSubmit}>Cancel</Button>
            </div>
          </form>
        </SkyLight>
      </div>
    );
  }
}
