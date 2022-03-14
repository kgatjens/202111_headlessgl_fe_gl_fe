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
        image
      ) : (
        image //default image
      )}
    </div>
  )
}
