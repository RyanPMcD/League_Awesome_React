import React from 'react';

export default class LineupHead extends React.Component {

  render() {
    return (
      <thead>
          <tr>
              <td title="Position">Pos</td>
              <td>Player</td>
              <td title="Opponent">Opp</td>
              <td title="Average Fantasy Points Per Game">FPPG</td>
              <td>Salary</td>
              <td>&nbsp;</td>
          </tr>
      </thead>
    );
  }
}