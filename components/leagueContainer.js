import React from 'react';

export default class LeagueContainer extends React.Component {
  render() {
    return (
      <div className='league-menu'>
        <ul className='menu-items'>
          <li>
            <a href='#'>Standings</a>
          </li>
          <li>
            <a href='#'>My Team</a>
          </li>
          <li>
            <a href='#'>My Medals</a>
          </li>
        </ul>
      </div>
    );
  }
}