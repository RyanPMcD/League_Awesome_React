import React from 'react';

export default class League extends React.Component {

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th className='league-table'>
              <a href='#'>Standing</a>
            </th>
            <th>
              <a href='#'>Team Name</a>
            </th>
            <th>
              <a href='#'>Record</a>
            </th>
          </tr>
        </thead>
      </table>
    );
  }
}