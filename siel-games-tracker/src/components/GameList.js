import React, {useState , useEffect}from 'react';
import GameCard from './SingleGame';

function GameList  () {
  const [games, setGames] = useState([]);

  useEffect(() => {
   fetch ("http://localhost:8000/games")
   .then ((r) => r.json())
   .then (data => {setGames(data)})
  }, []);

  return (
    <div className="container">
      {games.map(game => (
        <GameCard game={game} key={game['GAME NO.']} />
      ))}
    </div>
  );
}

export default GameList;
