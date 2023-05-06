import React, {useState , useEffect}from 'react';
import SearchBar from './SearchBar';



function GameList  () {
  const [games, setGames] = useState([]);

  useEffect(() => {
   fetch ("http://localhost:8000/games")
   .then ((r) => r.json())
   .then (data => {setGames(data)})
  }, []);

  
  return (
    <div className="container">
    <SearchBar details={games}/>
   
    
    
    </div>
  );
}

export default GameList;
