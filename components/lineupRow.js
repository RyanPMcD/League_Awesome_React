import React from 'react';

export default class LineupRow extends React.Component {

  render() {
    let {position} = this.props;
    return (
      <tr data-rp="PG">
          <td className="pos">{position}</td>
          <td className="p-name"></td>
          <td className="opp"></td>
          <td className="pts"></td>
          <td className="salary"></td>
          <td className="last">&nbsp;</td>
      </tr>
    );
  }
}