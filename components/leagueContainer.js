import React from 'react';

export default class LeagueContainer extends React.Component {

  render() {
    return (
      <section>
        <div className='league-menu'>
          <ul className='menu-items'>
            <li>
              <span>League Name: </span>
              <div className='clear'></div>
            </li>
            <li>
              <span>League Size:</span>
              <div className='clear'></div>
            </li>
            <li>
              <span>Sport:</span>
              <div className='clear'></div>
            </li>
            <li>
              <span>Season:</span>
              <div className='clear'></div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}