
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

const SearchForm = ( {searchQuery, setSearchQuery, handleSearchFormSubmit} ) => {
  
  const searchInput = React.createRef();
  const handleSearchHover = () => {
    searchInput.current.style.display = "block"; 
  }

  const handleHoverExit = () => {
    searchInput.current.style.display = "none"; 
  }

  return (
    //<form className="flex w-full justify-center py-2.5" onSubmit={handleSearchFormSubmit}>
    <form className="flex w-full justify-center py-4" onSubmit={handleSearchFormSubmit}>
      <div className="block  w-4/5 group">
           
        <input
          placeholder="Search..."
          value={searchQuery}
          ref={searchInput}
          id="search-nav-input"
          aria-label="Search" aria-describedby="button-addon2"
          onChange={( event ) => setSearchQuery( event.target.value )}
          onMouseOut={(e) => handleHoverExit(e)}
           className="hidden w-screen -left-0 absolute bg-gray3 top-24 text-center text-darkblue transition z-10 focus:outline-none focus:border-transparent p-2  text-xl lg:text-2xl placeholder:text-gray2 "
          />

        <svg onClick={(e) => handleSearchHover(e)} onMouseMove={(e) => handleSearchHover(e)} className="h-5 w-5 fill-current cursor-pointer hover:fill-gray3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                      height="30" viewBox="0 0 30 30">
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971  23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
            </path>
        </svg>
      </div>
      
    </form>
  );
};

SearchForm.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
  handleSearchFormSubmit: PropTypes.func
};

SearchForm.defaultProps = {
  searchQuery: '',
  setSearchQuery: () => null,
  handleSearchFormSubmit: () => null
};

export default SearchForm;
