import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedImage({ title, source, sourceSet, slug }) {
    console.log(title);
    console.log(sourceSet);
    console.log(source);
    console.log(slug);
    const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={source}
      srcset={sourceSet}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}