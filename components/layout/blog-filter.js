import PropTypes from 'prop-types';
import { useState } from 'react';

const BlogFilter = ({ authors, categories, onSubmit, onSubmit2, onSubmitSearch }) => {
  const [ categoryId, setCategoryId ]     = useState( 0 );
  const [ authorId, setAuthorId ]         = useState( 0 );

  const [ searchPhrase, setSearchString ] = useState( "" );
  const [selectedCategory, setCatValue] = useState(0);
  const [selectedAuthor, setAutValue]  = useState(0);

  const handleBlogFilterFormSubmit = ( event ) => {
    event.preventDefault();
    onSubmit(selectedCategory);
    onSubmit2(selectedAuthor);
    onSubmitSearch(searchPhrase)
  };

  const handleBlogClearFormSubmit = ( event ) => {
    event.preventDefault();
    onSubmit(0);
    onSubmit2(0);
    setAutValue(0)
    setCatValue(0)
    onSubmitSearch("")
  };

  return (
    <div className="flex px-2 py-2 grid  ">
      
        <form className="flex content-center inline-block m-auto relative float-left"  onSubmit={handleBlogFilterFormSubmit}>
                <select pattern="[0-9]"  id="authors" name="selectedAuthor" value={selectedAuthor} onChange={(e) => {setAutValue(e.target.value);}} className="border border-lightblue text-gray2 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block  px-4 py-2 pr-8 rounded "> 
                <option key="author" value="0">Authors </option>
                {authors.edges?.map((author, index) => (
                     <option key={index} value={author.node.userId}>{author.node.name} </option>
                ))
                } 
                </select>
                <select pattern="[0-9]"  id="categories" name="selectedCategory" value={selectedCategory} onChange={(e) => {setCatValue(e.target.value);}} className="border border-lightblue text-gray2 text-xs rounded-lg block  px-4 py-2 pr-8 rounded "> 
                <option  key="category" value="0">Categories </option>
                {categories.edges?.map((category, index) => (
                    <option key={index} value={category.node.categoryId}>{category.node.name} </option>
                ))
                } 
                </select>
                <input 
                size={15}
                className="border border-lightblue text-gray2 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block  px-4 py-2 pr-8 rounded "
                type="text" id="searchPhrase"  
                value={searchPhrase} onChange={(e) => {setSearchString(e.target.value);}}
                name="searchPhrase" minLength="4" maxLength="40" pattern="[a-z0-9]{1,15}" title="Search phrase should be digits (0 to 9) or alphabets (a to z)." placeholder='Search..'   />

            <input
                type="submit"
                value="Filter"
                onClick={handleBlogFilterFormSubmit}
                className="cursor-pointer	text-white bg-gradient-to-t from-orange to-darkorange hover:text-darkblue border-0 py-2 px-5 focus:outline-none rounded"/>
            <input
                type="submit"
                value="Clear"
                onClick={handleBlogClearFormSubmit}
                className="cursor-pointer	text-white bg-gradient-to-t from-orange to-darkorange hover:text-darkblue  border-0 py-2 px-5 focus:outline-none  rounded"/>
        </form>
      
    </div>
  );
};


export default BlogFilter;
