import { useState } from "react";
import GameCard from "./GameCard";

 function SearchBar({details}) {
 
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredGames = details.filter(
    games => {
      return (
        games.home?.toLowerCase().includes(searchField.toLowerCase()) ||
        games.away?.toLowerCase().includes(searchField.toLowerCase())
      );
      
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
  	if (searchShow) {
	  	return (
	  		
	  			<GameCard filteredGames={filteredGames} />
	  		
	  	);
	  }
  }

  return (
    <section className="garamond">
			<div className="navy georgia ma0 grow">
				<h2 className="f2">Search your course</h2>
			</div>
			<div className="pa2">
				<input 
					className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
					type = "search" 
					placeholder = "Search Games" 
					onChange = {handleChange}
				/>
			</div>
			{searchList()}
		</section>
  );
}



export default SearchBar