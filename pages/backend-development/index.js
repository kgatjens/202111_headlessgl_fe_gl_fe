import Image from 'next/image'

import Container from '../../components/layout/container'
import MainMenu from '../../components/strapi/mainMenu/mainMenu'
// import Layout from '../components/layout/layout'
// import Header from '../components/layout/header'
// import Footer from '../components/layout/footer'

//import MainLayout from '@components/layout/mainLayout'
import Link from 'next/link'
import style from './page-style.module.scss'

//import { getMainMenu,getBackendPage } from '../../lib/strapi/api'
//import { getMainMenu } from '../../lib/wp/api'

export default function Page({ data, backendData  }) {
//  console.log(data);
//  console.log(backendData);


  return (
    <>
      <Container >
        {/* Add content here */}
        <MainMenu menuItems={data} />

        {/* <Meta
        headerData={headerData.metaData}
        extraHeaderTags={headerData.extraHeaderTags}
      /> */}

        <div
          className={`static-page capability ${style.backend}`}
          data-test="backend-development"
        >
          <section className="header-image-fullscreen centered-text">
            <img
              className="with-gradient"
              src="/img/2023/02/Backend-Development-Hero.jpg.jpg"
              alt="BackEnd Development"
            />
            <div className="text-overlay">
              <h1>Backend Development</h1>
              <h6>
                Access the technologies and expertise to drive your applications
              </h6>
            </div>
          </section>

          <section className="overview colored-section white">
            <div className="colored-section-internal">
              <div className="side-by-side-container">
                <div className="with-sidebar">
                  <div className="next-to-aside">
                    <h2>Gorilla Logic’s backend development services</h2>
                    <p>
                      In our hyper-connected, always-on-the-go world, your
                      customers are relying on intuitive, high performance web
                      and mobile applications to simplify their lives.&nbsp;
                      <Link href={`/software-development-services`}>
                        Deliver an app that meets their needs,
                      </Link>
                      &nbsp; and you have a loyal customer. Fall short of their
                      expectations and risk falling behind your competition.
                      Your applications are the lifeblood of your business. Our
                      Team members are experts in developing backend systems
                      that are at the core of them. We deliver solid, performant
                      web services and infrastructure that serve as the
                      foundation for security, systems integration, data
                      warehousing and analytics and more.
                    </p>

                    
                    
                  </div>
                
                </div>
              </div>
            </div>
          </section>

          <section className="overview colored-section sand">
            <div className="colored-section-internal">
              <div className="side-by-side-container">
                <div className="with-text-and-image">
                  <div className="side-by-side-image pad-right">
                    <img
                      src="/img/2023/01/Box01-Right-Tech.jpg"
                      alt="The Right Technology Stack for Your Applications"
                    />
                  </div>
                  <div className="side-by-side-text">
                    <h2>The Right Technology Stack for Your Applications</h2>
                   <p></p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          
        </div>
      </Container>
    </>
  )
}

export async function getServerSideProps() {
   //const backendData = await getBackendPage()
   //const data = await getMainMenu()

  return {
    props: { data,backendData },
  }
}