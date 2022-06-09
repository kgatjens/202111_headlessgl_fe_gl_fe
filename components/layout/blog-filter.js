import PropTypes from 'prop-types';
const BlogFilter = ({ authors, categories, handleBlogFilterFormSubmit }) => {
 
  return (
    <div className="flex px-2 py-2 ">
      
        <form className="flex content-center inline-block relative w-full float-left" >
                <select id="authors" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block  px-4 py-2 pr-8 rounded "> 
                <option key="author" value="">Authors </option>
                {authors.edges?.map((author, index) => (
                    <option key={index} value="">{author.node.name} </option>
                ))
                } 
                </select>
                <select id="categories" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block  px-4 py-2 pr-8 rounded "> 
                <option key="category" value="">Categories </option>
                {categories.edges?.map((category, index) => (
                    <option key={index} value="">{category.node.name} </option>
                ))
                } 
                </select>
            <input
                type="submit"
                value="Filter"
                onClick={handleBlogFilterFormSubmit}
                className="cursor-pointer	text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"/>
        </form>
      
    </div>
  );
};

BlogFilter.propTypes = {
handleBlogFilterFormSubmit: PropTypes.func
};
  
BlogFilter.defaultProps = {
handleBlogFilterFormSubmit: () => null
};

export default BlogFilter;