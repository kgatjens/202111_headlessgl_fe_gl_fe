import BlogPreview from '../blogs/blog-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-4 text-3xl md:text-3xl font-bold tracking-tighter leading-tight">
        Filtered Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map(( key ) => (
          <BlogPreview
            key={key.slug}
            title={key.title.rendered}
            coverImage={key.featured_image_src}
            date={key.date}
            author={key.author}
            slug={key.slug}
            excerpt={key.excerpt.rendered}
          />
        ))}
      </div>
    </section>
  )
}