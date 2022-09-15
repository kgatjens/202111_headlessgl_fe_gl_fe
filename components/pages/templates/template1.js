

export default function Template1( content ) {
  // console.log("11111")
  // console.log(content.content.pagesFields)
  return (
    <div className="max-w-2xl mx-auto">
        <h3>Template1</h3>
      <div
        className=""
        //dangerouslySetInnerHTML={"Template1"}
      />

      <div className="max-w-4xl p-4 text-white bg-black rounded-lg shadow">
        <div className="mb-2">
          <div className="h-3 text-3xl text-left text-gray-600">“</div>
          <p className="px-4 text-sm text-center text-gray-600">
            {content.content.pagesFields?.mainQuote}
          </p>
          <div className="h-3 text-3xl text-right text-gray-600">”</div>
        </div>
      </div>
    </div>
  )
}