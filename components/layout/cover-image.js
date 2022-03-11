import Link from 'next/link'

export default function CoverImage({ title, coverImage }) {
  const image = (
    <img
      src={coverImage}
      className={'object-cover h-full w-full'}
      alt={title}
    />
  )
  return (
    <div className="sm:mx-0">
      {coverImage ? (
        <Link href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
