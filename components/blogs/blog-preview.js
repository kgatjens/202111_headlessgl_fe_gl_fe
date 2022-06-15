import Avatar from '../layout/avatar'
import Date from '../layout/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {

  console.log(author);
  return (
    <div>
      <div className="mb-5">
        
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        
      </div>
      <h3 className="text-2xl mb-2 leading-snug">
        <Link href={`/blogs/${slug}`}>
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
      {({date})&&({date}.lenght>0) ?  
        <Date dateString={date} />
        : <p> No Date</p> 
      }
      </div>
      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
        {({author})&&({author}.lenght>0) ?  
        <Avatar author={author} />

        : <p> No Author Info</p> 
      }
    </div>
  )
}