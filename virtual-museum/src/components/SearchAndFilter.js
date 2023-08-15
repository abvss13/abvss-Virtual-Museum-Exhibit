import React, { useState } from 'react';


const SearchAndFilter = ({ figures, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onFilter(event.target.value);
  };

  return (
    <div className="search-and-filter">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default SearchAndFilter;
