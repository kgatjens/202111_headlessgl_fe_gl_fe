import { useState } from 'react';
import Router from 'next/router';

import SearchForm from './search-form';

const NavSearch = () => {
  const [ searchQuery, setSearchQuery ] = useState( '' );
  const handleSearchFormSubmit = ( event ) => {
    event.preventDefault();
    Router.push( `/search?s=${searchQuery}` );
    return null;
  };

  return (
    <div className="">
    <div className="">
      <SearchForm
        searchQuery={ searchQuery }
        setSearchQuery={ setSearchQuery }
        handleSearchFormSubmit={handleSearchFormSubmit}
      />
        </div>
    </div>  
    );
};

export default NavSearch;