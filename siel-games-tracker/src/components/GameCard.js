import React from 'react';
import './App.css';

function GameCard({filteredGames}) {
  
  const filtered = filteredGames.map( game =>  <GameCard game={game} key={game['GAME NO.']} />)

  return (

    <div className="card">
    <div className="card-left">
    <p>{filtered['GAME NO.']}</p>
      <h2>{filtered['HOME']}</h2>
      <p>Vs</p>
      <h2>{filtered['AWAY']}</h2>
    </div>
    <div className="card-right">
      <p>Date: {filtered['DATE']}</p>
      <p>Time: {filtered['TIME']}</p>
      <p>Court: {filtered['COURT']}</p>
      <p>Location: {filtered['LOCATION']}</p>
    </div>
  </div>

  );
}

export default GameCard;