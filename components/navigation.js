import React from 'react';

export default class Navigation extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default">
          <div className="container">
              <div className="logo"></div>
              <ul className="nav navbar-nav navbar-right">
                  <li><a href="https://www.draftkings.com/lobby">Lobby</a></li>
                  <li><a href="https://www.draftkings.com/help/faq">FAQ</a></li>
              </ul>
          </div>
      </nav>
    );
  }
}