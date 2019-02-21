import React, { Component } from 'react';
import axios from 'axios';

import Table from './Table';

class TableContainer extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      const users = res.data;
      console.log(users);
      this.setState({ users });
    });
  }

  render() {
    return <Table users={this.state.users} />;
  }
}

export default TableContainer;
