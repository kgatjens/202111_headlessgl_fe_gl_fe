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

  const imageSrc = (coverImage.node) ? coverImage.node.sourceUrl : coverImage
  const imageTitle = (coverImage.node) ? coverImage.node.title : "Blog image"
  const imageSrcSet = (coverImage.node) ? coverImage.node.srcSet : ""

  return (
    <div>
      <div className="mb-5">
        {coverImage && (
          <FeaturedImage title={imageTitle} source={imageSrc} sourceSet={imageSrcSet} slug={slug} />
        )}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/blogs/${slug}`}>
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        {(date)&&(date.lenght>0) ?  
          <Date dateString={date} />
          : <p> No Date</p> 
        }      </div>
      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
        {(author)&&(author.lenght>0) ?  
          <Avatar author={author} />
          : <p> No Author Info</p> 
        }    
      </div>
  )
}