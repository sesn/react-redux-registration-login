import React from 'react';
import { Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';

import { history } from '../_helpers';
import {alertActions} from '../_actions';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello world
      </div>
    )
  } 
}
const connectedApp = connect()(App);
export { connectedApp as App };