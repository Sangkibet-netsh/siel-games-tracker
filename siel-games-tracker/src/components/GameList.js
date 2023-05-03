import React, {useState , useEffect}from 'react';
import GameCard from './SingleGame';
//import SearchBar from './SearchBar';

function GameList  () {
  const [games, setGames] = useState([]);
  const [searchGame , setSearchGame] = useState([])

  useEffect(() => {
   fetch ("http://localhost:8000/games")
   .then ((r) => r.json())
   .then (data => {setGames(data); setSearchGame(data)} )
  }, []);

//   const filteredGames = games.filter((game) => (
//     game.home.toLowerCase().includes(search.toLowerCase()) 
//     ))
  
  return (
    <div className="container">
    {/*<SearchBar searchGame={searchGame} setSearchGame={filteredGames}/>*/}

      {games.map(game => (
        <GameCard game={game} key={game['GAME NO.']} />
      ))}
     
    </div>
  );
}

export default GameList;
