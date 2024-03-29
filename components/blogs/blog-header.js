import Avatar from '../layout/avatar'
import Date from '../layout/date'
import CoverImage from '../blogs/cover-image'
import PostTitle from '../layout/post-title'
import Categories from '../layout/categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  // console.log("Author:");
  // console.log(author.node.firstName);
 const coverImageValidated = (coverImage) ? coverImage : {}
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar author={author} /><span>Author: {author.node.firstName} {author.node.lastName}</span>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
      
        <CoverImage title={title} coverImage={coverImageValidated} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
          
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  )
}