import Link from 'next/link';
import CoverImage from '../layout/cover-image'
import Carousel from '../lib/carousel'
const color1="#475399";

export default function Homepage({
    title,
    descriptionText,
    headerImageURL,
    headerImageAltText,
    sectionBackgrounURL,
    sectionBackgrounAltText,
    sectionColor,
    carousel,

  }) {

    return(
        <div>
        <div className="mb-8 md:mb-16">
          {headerImageURL && (
            <CoverImage title={headerImageAltText} coverImage={headerImageURL}  />
          )}
        </div>
        <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
          <div>
            <h1 className="mb-4 text-4xl lg:text-6xl leading-tight" 
                dangerouslySetInnerHTML={{ __html: title }}>
            </h1>
          </div>
          <div>
            <div
              className="text-lg leading-relaxed mb-4"
               dangerouslySetInnerHTML={{ __html: descriptionText }}
            />
          </div>
        </div>
        <Carousel carousel={carousel}/>

        {/* <div className={`top-[117px] flex justify-between   bg-[#${sectionColor}]`} > */}
        
        {/* <div className={`w-[200px] bg-[${color1}]`} >
          <div class={`bg-[url('${sectionBackgrounURL}')]`}>
        */}
        <div style={{ backgroundColor:sectionColor}} >
            <p>{ descriptionText }</p>
        </div>
        <div style={{backgroundImage: "url(" + sectionBackgrounURL + ")"}}>
        <p>{ descriptionText }</p>
        <p>{ descriptionText }</p>
        <p>{ descriptionText }</p>
        <p>{ descriptionText }</p>
        </div>

      </div>
        
    )
}