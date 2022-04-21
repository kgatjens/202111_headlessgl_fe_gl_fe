import Avatar from '../layout/avatar'
import Date from '../layout/date'
import FeaturedImage from '../layout/featured-image'
import Link from 'next/link'

export default function BlogsPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  
}) {
  return (
    <div>
      <div className="mb-5">
        {coverImage && (
          <FeaturedImage title={coverImage.node.title} source={coverImage.node.sourceUrl} sourceSet={coverImage.node.srcSet} slug={slug} />
        )}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      {/* <Avatar author={author} /> */}
    </div>
  )
}