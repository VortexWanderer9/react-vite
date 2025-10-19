const Search = ( {searchTerm, setSearchTerm}) => {
  return (
    <div className="search">
      <img className="mr" src="./search.svg" alt="" />
     <input className="border-none outline-none" type="text" placeholder="Search Your favorite Movies" 
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
  )
}



export default Search;
