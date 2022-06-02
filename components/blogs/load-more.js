import BlogsPreview from '../pages/blogs-preview'

export default function LoadMoreBlogs({ posts }) {  
console.log("LLLOAd More:")
console.log(posts)
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map(( blogInfo, index ) => ( 
          <BlogsPreview
            key={blogInfo.id}
            title={blogInfo.title.rendered}
            coverImage={blogInfo.featured_image_src}
            date={blogInfo.date}
            author={blogInfo.author_info.display_name}
            slug={blogInfo.slug}
            excerpt={blogInfo.excerpt.rendered}
           
          />
        ))}
      </div>
      <div>
      </div>
    </section>
  )
}