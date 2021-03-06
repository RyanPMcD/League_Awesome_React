import React from 'react';
import League from './league';

export default class LeagueContainer extends React.Component {
  static get propTypes() {
    return {
      league: React.PropTypes.object
    };
  }

  render() {
    const {LeagueId, LeagueName, Size, Sport, Season} = this.props.league;

    return (
      <section>
        <div className='league-menu'>
          <ul className='menu-items'>
            <li>
              <span>League Name: {LeagueName}</span>
              <div className='clear'></div>
            </li>
            <li>
              <span>League Size: {Size}</span>
              <div className='clear'></div>
            </li>
            <li>
              <span>Sport: {Sport}</span>
              <div className='clear'></div>
            </li>
            <li>
              <span>Season: {Season}</span>
              <div className='clear'></div>
            </li>
          </ul>
        </div>
        <League />
      </section>
    );
  }
}