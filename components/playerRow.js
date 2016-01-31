import React from 'react';

export default class PlayerRow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {position, name, opp, oprk, ffpg, salary, id, movePlayers, isLocked} = this.props;
    let classes = isLocked ? '' : 'plus';
    return (
      <tr data-rp="PG">
          <td className="pos">{position}</td>
          <td className="p-name">{name}</td>
          <td className="opp">{opp}</td>
          <td className="pts">{ffpg}</td>
          <td className="salary">{salary}</td>
          <td className={classes} onClick={() => movePlayers(id)}>&nbsp;</td>
      </tr>
    );
  }
}