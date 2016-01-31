import React from 'react';

export default class Timer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let {isLocked} = this.props;
    let sec = 30;
    setInterval(() => {
      sec--;
    }, 1000);
    let ticker = isLocked ?  `00:00:${sec}` : '00:00:00';
    return (
      <div className='timer'>
        <h1>
          {ticker}
        </h1>
      </div>
    );
  }
}