import Link from "next/link";
import Image from "next/image";
import CoverImage from "../layout/cover-image";
import Carousel from "../lib/carousel";
const color1 = "#475399";
import Clocks from "../../components/widgets/clocks";
import styles from "../../styles/custom/clocks.module.css";

export default function Homepage({
  title,
  descriptionText,
  headerImageURL,
  headerImageAltText,
  sectionBackgrounURL,
  sectionBackgrounAltText,
  sectionColor,
  carouselComponent,
}) {
  return (
    <div>
      <div className="mb-8 md:mb-16">
        {headerImageURL && (
          <CoverImage title={headerImageAltText} coverImage={headerImageURL} />
        )}
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h1
            className="mb-4 text-4xl lg:text-6xl leading-tight"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          <Carousel carouselSlider={carouselComponent} />
        </div>

        <div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: descriptionText }}
          />
        </div>
      </div>

      {/* <div className={`top-[117px] flex justify-between   bg-[#${sectionColor}]`} > */}

      {/* <div className={`w-[200px] bg-[${color1}]`} >
          <div class={`bg-[url('${sectionBackgrounURL}')]`}>
        */}


      <div style={{ backgroundImage: "url(" + sectionBackgrounURL + ")" }}>
        <div>
          {/* <div style={{ backgroundColor: sectionColor }}> */}
          <p>{descriptionText}</p>
        </div>

        <div style={{ display: "flex", paddingBottom: "8rem" }}>
          <div style={{ 
            display: "flex",
             flexDirection: "column",
              flex: 1 
              }}>
            <p>{descriptionText}</p>
            <p>{descriptionText}</p>
            <p>{descriptionText}</p>
            <p>{descriptionText}</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <div style={{ display: "flex" }}>
              <div className={styles["clock-content"]}>
                <div id="denver">
                  <Clocks timeZone="America/Denver" place="DENVER" />
                </div>
                <div id="mx">
                  <Clocks timeZone="America/Mexico_City" place="MEXICO" />
                </div>
                <div id="crc">
                  <Clocks timeZone="America/Costa_Rica" place="COSTA RICA" />
                </div>
                <div id="col">
                  <Clocks timeZone="America/Bogota" place="COLOMBIA" />
                </div>
                <div id="ind">
                  <Clocks
                    timeZone="Asia/Kolkata"
                    color="#9C9C9C"
                    place="INDIA"
                  />
                </div>
                <div id="poland">
                  <Clocks timeZone="Poland" color="#9C9C9C" place="POLAND" />
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
