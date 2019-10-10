import React from 'react';

const Buttons = props => {

  console.log(props.addStrike)
  return(
    <div className='buttons'>
      <button className='button' onClick={props.addStrike}>Strike!</button>
      <button className='button' onClick={props.addBall}>Ball!</button>
      <button className='button' onClick={props.foul}>Foul!</button>
      <button className='button' onClick={props.hit}>Hit!</button>
    </div>
  )
}

export default Buttons