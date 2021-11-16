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
    <div className="bg-gradient-to-r from-green-400 to-blue-500 px-6">
    <div className="info max-w-xl mx-auto py-10">
      <br/>
      <h2 className="text-center text-white py-4 text-3xl uppercase font-bold">Find your needs</h2>
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