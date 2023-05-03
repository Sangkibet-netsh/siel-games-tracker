import React from 'react';
import './App.css';

function GameCard(props) {
  const {game} = props;

  return (

    <div className="card">
    <div className="card-left">
    <p>{game['GAME NO.']}</p>
      <h2>{game['HOME']}</h2>
      <p>Vs</p>
      <h2>{game['AWAY']}</h2>
    </div>
    <div className="card-right">
      <p>Date: {game['DATE']}</p>
      <p>Time: {game['TIME']}</p>
      <p>Court: {game['COURT']}</p>
      <p>Location: {game['LOCATION']}</p>
    </div>
  </div>

  );
}

export default GameCard;