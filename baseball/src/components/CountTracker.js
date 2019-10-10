import React from 'react';

const CountTracker = props => {
  return(
    <div className='header-holder'>
      <div className='headers'>Strikes
        <div className='count-box'>{props.strikes}</div>
      </div>
      <div className='headers'>Balls
        <div className='count-box'>{props.balls}</div>
      </div>
    </div>
  )
}

export default CountTracker