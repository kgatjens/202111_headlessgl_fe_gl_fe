import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage({ title, coverImage, slug }) {

  const backImage = (coverImage?.node?.sourceUrl===undefined||coverImage===null) ? "https://headlessgl22.wpengine.com/wp-content/uploads/2022/04/gl_blue.png" : coverImage.node?.sourceUrl
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={backImage}
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