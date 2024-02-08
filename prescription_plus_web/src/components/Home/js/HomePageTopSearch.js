import React from 'react';
import backgroundImage from '../../../assests/images/uhdoc.webp'
import '../css/SearchComponent.css'; // Make sure to create a corresponding CSS file for styling

const SearchComponent = () => {
  // Function to handle the search logic
  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search initiated');
  };

  return (
    <div className="search-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Unified healthcare management system for patients, doctors and hospitals</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Find a doctor, clinic, hospital"
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
