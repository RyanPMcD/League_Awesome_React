import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

export default class TeamRows extends React.Component {

  static get propTypes() {
    return {
      teams: React.PropTypes.array
    };
  }


  render() {
    let teams = _.orderBy(this.props.teams, 'Standing', 'asc');
console.log(teams);

    return (
      <tbody>
        {teams.map(team =>
          <tr className='team-row'>
            <td className='team-position'>
              {team.Standing}
            </td>
            <td>
              <Link to='/team'>{team.TeamName}</Link>
            </td>
            <td>
              <Link to='#'>{team.Record}</Link>
            </td>
          </tr>
        )}
      </tbody>
    );
  }
}