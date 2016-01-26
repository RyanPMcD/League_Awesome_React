import React from 'react';
import ReactDOM from 'react-dom';
import LeagueContainer from './leagueContainer';
import LeagueData from '../LeagueFixture';

export default class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>League Awesome</h1>
          <LeagueContainer league={LeagueData}/>
      </div>
    );
  }
}

ReactDOM.render(<MainContainer/>, document.getElementById('main'));