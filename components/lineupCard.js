import React from 'react';
import LineupRow from './LineupRow';
import LineupHead from './LineupHead';
import PlayerRow from './PlayerRow';

export default class LineupCard extends React.Component {

  constructor(props){
    super(props);
    this.findIndexByPosition = this.findIndexByPosition.bind(this);
  }

  findIndexByPosition(positions, position){
    for(let i=0;i<positions.length;i++){
      if(positions[i] == position){
        return i;
      }
    }
  }

  render() {
    let {title, myPlayers} = this.props;
    let positions = ['QB', 'RB', 'RB', 'WR', 'WR', 'WR', 'TE', 'FLEX', 'UTIL'];
    let rows = [];
    for (let i = 0; i<positions.length; i++) {
      rows.push(
        <LineupRow 
          position={positions[i]} 
          movePlayers = {this.props.movePlayers} key = {i}/>
      );
    }

    let totalSalary = 0;

    if(myPlayers.length){
      totalSalary = 0;
      for(let i = 0; i<myPlayers.length;i++){
        let idx = this.findIndexByPosition(positions, myPlayers[i].PositionName);
        rows[idx] = 
          <PlayerRow
            position = {myPlayers[i].PositionName}
            name = {myPlayers[i].FirstName + ' ' + myPlayers[i].LastName}
            opp = {myPlayers[i].TeamId}
            ffpg = {myPlayers[i].AvgPointsPerGame}
            salary = {"$" + myPlayers[i].Salary}
            movePlayers = {this.props.movePlayers}
            id = {myPlayers[i].PlayerId}
            key = {i}
          />;
        totalSalary += myPlayers[i].Salary;
      }
    }


    return (
      <section className="lineup-card">
        <h2>{title}</h2>
        <h2>{'$' + totalSalary}</h2>
        <table className="dk-grid">
          <LineupHead/>
          <tbody>
            {rows}
          </tbody>
        </table>
      </section>
    );
  }
}