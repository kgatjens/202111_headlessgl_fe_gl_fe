

export default function Template2( content ) {
  console.log("2222")
  console.log(content)  
  return (
      <div className="max-w-2xl mx-auto">
        <h3>Template2</h3>
        <div
          className=""
         // dangerouslySetInnerHTML={"Template2"}
        />
      </div>
    )
  }