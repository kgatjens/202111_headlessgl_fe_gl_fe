

export default function BlogFilter({ authors, categories }) {
 console.log(categories)
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <form>
            <select > 
            {authors.edges?.map((author, index) => (
                <option key={index} value="">{author.node.name} </option>
            ))
              } 
            </select>

            <select > 
            {categories.edges?.map((category, index) => (
                <option key={index} value="">{category.node.name} </option>
            ))
              } 
            </select>
        </form>
      </div>
    </div>
  )
}