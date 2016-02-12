import React from 'react';
import LeagueContainer from './leagueContainer';
import LeagueData from '../LeagueFixture';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>League Awesome</h1>
          <LeagueContainer league={LeagueData}/>
      </div>
    );
  }
}
