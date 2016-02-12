import React from 'react';
import TeamRows from './teamRows';
import teamData from '../TeamFixture';

export default class League extends React.Component {

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th className='league-table'>
              <a href='#'>Standing</a>
            </th>
            <th>
              <a href='#'>Team Name</a>
            </th>
            <th>
              <a href='#'>Record</a>
            </th>
          </tr>
        </thead>
        <TeamRows teams={teamData} />
      </table>
    );
  }
}