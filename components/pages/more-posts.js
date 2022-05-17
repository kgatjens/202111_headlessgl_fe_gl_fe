import BlogsPreview from './blogs-preview'
import LoadMore from '../lib/load-more'

export default function MoreBlogs({ posts }) {
    
  return (
    <section>
      <h2 className="mb-8 text-3xl md:text-3xl font-bold tracking-tighter leading-tight">
        More Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map(({ node }) => (
          <BlogsPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
    
          />
        ))}
      </div>
      <LoadMore />
    </section>
  )
}