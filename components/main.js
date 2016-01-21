import React from 'react';
import ReactDOM from 'react-dom';

export default class MainContainer extends React.Component {
  render() {
    return <h1>Home Page</h1>
  }
}

ReactDOM.render(<MainContainer/>, document.getElementById('main'));