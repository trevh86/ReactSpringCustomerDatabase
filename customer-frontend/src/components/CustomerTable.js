import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";

export default class CustomerTable extends Component {
  constructor(props) {
    super(props);
    this.state = { customerData: [] };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/customers", { mode: "cors" })
      .then(res => res.json())
      .then(resData => {
        this.setState({ customerData: resData.content });
      })
      .catch(err => console.error(err));
  }

  async getCustomersFromBackend() {
    try {
      const response = await axios.get("http://localhost:8080/api/customers");
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  loadCustomers = () => {
    fetch("http://localhost:8080/api/customers")
      .then(res => res.json())
      .then(resData => {
        this.setState({ customerData: resData.content });
      })
      .catch(err => console.error(err));
  };

  render() {
    return <div className="container" />;
  }
}
