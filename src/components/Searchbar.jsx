import React, { useState } from 'react';

function Searchbar(props) {
  const { searchFilter } = props;
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    //this handles the input state
    setSearch(e.target.value);

    //this passes the state up to movieList
    searchFilter(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search Food</label>
      <input type="text" name="search" value={search} onChange={handleSearch} />
    </div>
  );
}

export default Searchbar;
