import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";
import { ApiAddress } from "../constants/constants";
import EditCustomer from "./EditCustomer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import AddCustomer from "./AddCustomer";
import Button from '@material-ui/core/Button';

export default class CustomerTable extends Component {
  constructor(props) {
    super(props);
    this.state = { customerData: [] };
  }

  componentDidMount() {
    this.getCustomersFromBackend();
  }

  async getCustomersFromBackend() {
    try {
      const response = await axios.get(ApiAddress);
      console.log(response.data._embedded.customers);
      this.setState({ customerData: response.data._embedded.customers });
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
        filterable: true,
        sortable: false
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        filterable: true,
        sortable: false
      },
      {
        Header: "Date of Birth",
        accessor: "dateOfBirth",
        filterable: true,
        sortable: false
      },
      {
        Header: "Username",
        accessor: "username",
        filterable: true,
        sortable: false
      },
      {
        Header: "Password",
        accessor: "password",
        filterable: true,
        sortable: false
      },
      {
        Header: "Edit",
        accessor: "_links.self.href",
        filterable: false,
        sortable: false,
        Cell: ({ row, value }) => (
            <EditCustomer
              updateCustomer={this.updateCustomer}
              link={value}
              customer={row}
            />
        )
      },
      {
        Header: "Delete",
        accessor: "_links.self.href",
        filterable: false,
        sortable: false,
        Cell: ({ value }) => (
          <Button
            size='small'
            variant='flat'
            color='secondary'
            onClick={() => {
              this.confirmDelete(value);
            }}
          >
            Delete
          </Button>
        )
      }
    ];
    return (
      <div className="container">
        <AddCustomer addCustomer={this.addCustomer} />
        <ReactTable
          data={data}
          columns={columns}
          minRows={1}
          className="-striped -highlight"
        />
        <ToastContainer autoClose={1500} />
      </div>
    );
  }

  addCustomer = customer => {
    fetch(ApiAddress, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customer)
    })
      .then(() => {
        toast.success("Customer added", {
          position: toast.POSITION.BOTTOM_LEFT
        });
        this.getCustomersFromBackend()
      })
      .catch(err => {
        toast.error("Error when adding", {
          position: toast.POSITION.BOTTOM_LEFT
        });
        console.error(err)
      });
  };

  deleteCustomer = link => {
    fetch(link, {
      method: "DELETE"
    })
      .then(() => {
        toast.success("Customer deleted", {
          position: toast.POSITION.BOTTOM_LEFT
        });
        this.getCustomersFromBackend();
      })
      .catch(err => {
        toast.error("Error when deleting", {
          position: toast.POSITION.BOTTOM_LEFT
        });
        console.error(err);
      });
  };

  confirmDelete = link => {
    confirmAlert({
      message: "Are you sure you want to delete this row?", // Todo Add row data.name by passing it as an argument.
      buttons: [
        {
          label: "Yes",
          onClick: () => this.deleteCustomer(link)
        },
        {
          label: "No"
        }
      ]
    });
  };

  updateCustomer = (link, activity) => {
    console.log(link);
    fetch(link, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(activity)
    })
      .then(() => {
        toast.success("Customer updated", {
          position: toast.POSITION.BOTTOM_LEFT
        });
        this.getCustomersFromBackend();
      })
      .catch(err => {
        toast.error("Error when updating", {
          position: toast.POSITION.BOTTOM_LEFT
        });
        console.error(err);
      });
  };
}
