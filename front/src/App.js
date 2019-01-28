import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from "graphql-tag";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="is-fullscreen">
      </div>
    );
  }
}

export default App;
