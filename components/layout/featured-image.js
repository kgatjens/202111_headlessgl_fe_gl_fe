import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedImage({ title, source, sourceSet, slug }) {
   
    const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={source}
      srcSet={sourceSet}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/blogs/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}