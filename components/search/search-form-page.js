
import PropTypes from 'prop-types';
//import { SearchIcon } from '../icons';

const SearchForm = ( {searchQuery, setSearchQuery, handleSearchFormSubmit} ) => {
  return (
    <form className="flex w-full justify-center" onSubmit={handleSearchFormSubmit}>
      <div className="block relative w-4/5">
           
        <input
          placeholder="Search..."
          value={searchQuery}
          aria-label="Search" aria-describedby="button-addon2"
          onChange={( event ) => setSearchQuery( event.target.value )}
          className="form-control text-gray relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
      </div>
      <input
        type="submit"
        value="Search"
        onClick={handleSearchFormSubmit}
        className="cursor-pointer	text-white bg-gradient-to-t from-orange to-darkorange hover:text-darkblue  border-0 py-2 px-5 focus:outline-none  rounded"/>
      
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
