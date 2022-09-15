import Image from 'next/image'

export default function Avatar({ author }) {
  
  
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null

   

  

  return (
    <div className="flex items-center">
      
      {(author.node) ?  
         <>
         <div className="w-12 h-12 relative mr-4 float-left">
         <Image
          src={author.node?.avatar.url}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
        </div>
        <div className="float-left  text-l font-bold pl-2.5">{author?.node.firstName} {author?.node.lastName}</div>
        </>
          : <div className="text-l font-bold">{author}</div>
        } 
      
    </div>
  )
}