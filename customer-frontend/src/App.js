import React, { Component } from "react";
import CustomerTable from "./components/CustomerTable";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomerTable />
      </div>
    );
  }
}

export default App;
