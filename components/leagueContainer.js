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
            </li>
            <li>
              <span>League Size: {Size}</span>
            </li>
            <li>
              <span>Sport: {Sport}</span>
            </li>
            <li>
              <span>Season: {Season}</span>
            </li>
          </ul>
        </div>
        <League />
      </section>
    );
  }
}