import React , {useEffect, useState} from 'react'

 function SearchBar( {setFilterGames} ) {
 
 const [searchGame , setSearchGame] = useState("")

 useEffect(() => {
    fetch (`"http://localhost:8000/games"${searchGame}`)
    .then ((r) => r.json())
    .then (data => {setFilterGames(data)})
   }, [searchGame]);

   function handleGameSearch(e) {
    setSearchGame (e.target.value)
   }
    
    return (
    <div>
    <form>
    <input type='text' placeholder='search game...'  onChange={handleGameSearch}></input>
    </form>
    
    </div>
  )
}


export default SearchBar