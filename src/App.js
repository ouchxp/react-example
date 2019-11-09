import * as React from 'react';

import './app.css';
import { connect } from 'react-redux';

const App = ({text}) => {
  return <div>{text}</div>
};

function mapStateToProps(state) {
  return {
    text: state.text,
  }
}

export default connect(mapStateToProps)(App);
