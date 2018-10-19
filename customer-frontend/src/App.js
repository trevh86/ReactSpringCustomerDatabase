import React, { Component } from "react";
import CustomerTable from "./components/CustomerTable";
import "./App.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar>
          <Toolbar>Customer List</Toolbar>
        </AppBar>
        <div style={{margin: 100}}>
        <CustomerTable />
        </div>
      </div>
    );
  }
}

export default App;
