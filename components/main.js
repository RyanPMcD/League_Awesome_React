import React from 'react';
import ReactDOM from 'react-dom';
import LeagueContainer from './leagueContainer';

export default class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>League Awesome</h1>
          <LeagueContainer/>
      </div>
    );
  }
}

ReactDOM.render(<MainContainer/>, document.getElementById('main'));