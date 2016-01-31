import React from 'react';
import LineupHead from './LineupHead';
import PlayerRow from './PlayerRow';

export default class PlayerPicker extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
	let {title} = this.props;
	let {movePlayers, players, isLocked} = this.props;
	let combined = [];
	for (let i = 0; i<players.length; i++) {
		combined.push(
			<PlayerRow
	  			position = {players[i].PositionName}
	  			name = {players[i].FirstName + ' ' + players[i].LastName}
	  			opp = {players[i].TeamId}
	  			ffpg = {players[i].AvgPointsPerGame}
	  			salary = {"$" + players[i].Salary}
	  			movePlayers = {this.props.movePlayers}
	  			id = {players[i].PlayerId}
	  			key = {i}
	  			isLocked = {isLocked}
	  		/>
		);
	}
	return (
	  <section className="player-picker">
	  	<table className="dk-grid">
	  		<LineupHead/>
	  		<tbody>
	  			{combined}
	  		</tbody>
	  	</table>
	  </section>
	);
	}
}