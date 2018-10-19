import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";
import {ApiAddress} from "../constants/constants";
import EditCustomer from './EditCustomer'

export default class CustomerTable extends Component {
  constructor(props) {
    super(props);
    this.state = { customerData: [] };
  }

  componentDidMount() {
    this.getCustomersFromBackend()
  }

  async getCustomersFromBackend() {
    try {
      const response = await axios.get(ApiAddress);
      console.log(response.data._embedded.customers);
      this.setState({ customerData: response.data._embedded.customers});
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const data = this.state.customerData;
    const columns = [
      {
        Header: "First Name",
        accessor: "firstName",
        filterable: true
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        filterable: true
      },
      {
        Header: "Date of Birth",
        accessor: "dateOfBirth",
        filterable: true
      },
      {
        Header: "Username",
        accessor: "username",
        filterable: true
      },
      {
        Header: "Password",
        accessor: "password",
        filterable: true
      },
      {
        Header: "Edit",
        accessor: "_links.self.href",
        filterable: false,
        sortable: false,
        Cell: ({row, value }) => (
          <div>
            <EditCustomer
              updateCustomer={this.updateCustomer}
              link={value}
              customer={row}
            />
          </div>
        )
      }
    ];
    return <div className="container">
      <ReactTable
        data={data}
        columns={columns}
        minRows={1}
        className="-striped -highlight"
      />
    </div>;
  }

  updateCustomer = (link, activity) => {
    console.log(link);
    fetch(link, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(activity)
    }).then(() => {
      this.getCustomersFromBackend();
    });
  };
}
