
import PropTypes from 'prop-types';
//import { SearchIcon } from '../icons';

const SearchForm = ( {searchQuery, setSearchQuery, handleSearchFormSubmit} ) => {

  const handleSearchHover = () => {
    const searchInput = document.getElementById('search-nav-input');
    searchInput.style.display = "block"; 
  }

  return (
    <form className="flex w-full justify-center" onSubmit={handleSearchFormSubmit}>
      <div className="block relative w-4/5 group">
           
        <input
          placeholder="Search..."
          value={searchQuery}
          id="search-nav-input"
          aria-label="Search" aria-describedby="button-addon2"
          onChange={( event ) => setSearchQuery( event.target.value )}
           className="w-screen -left-55 absolute bg-gray3 top-16 text-center text-white transition z-10 focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-xl lg:text-2xl placeholder:text-gray2 placeholder:pl-[54px]"
          //className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
          />
          <b x-show="search.trim() != '''"
                class="text-white hover:text-darkblue cursor-pointer text-lg absolute top-16 right-2" title="clear" />
                <span>&times;</span>
      
      <svg onClick={handleSearchFormSubmit} onMouseMove={(e) => handleSearchHover(e)} className="  block w-10 p-2 group-hover:block" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
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
