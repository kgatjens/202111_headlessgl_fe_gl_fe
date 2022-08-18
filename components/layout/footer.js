import Script from 'next/script'
import Container from '../layout/container'
import Link from 'next/link';
import styles from '../../styles/sass/footer.module.scss'


export default function Footer(headerData) {
    // console.log("##Footer##");
    // console.log(headerData.footer.menuItems.nodes);
    // console.log("###");
  return (
    <footer className="bg-accent-1 border-t border-accent-2 bg-gradient-to-t from-lightblue to-white text-darkblue w-screen py-5">

      <Container>
        <div className="grid grid-cols-3 gap-4">
          

          <div className="col-span-2 ...">
            <Script id="hs-legacy-forms-js" src="//js.hsforms.net/forms/v2-legacy.js" strategy="beforeInteractive" />
            <Script id="hs-forms-js" src="//js.hsforms.net/forms/v2.js"  strategy="beforeInteractive"  onLoad={() =>hbspt.forms.create({})}/>   
            <Script id="hbspt-footer" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
              hbspt.forms.create({
                region: "na1",
                portalId: "2059590",
                formId: "5190425c-61e6-4ff3-bc6e-1d12786f903d",
                target: '#footer_form'
              });
            `}} />
            <div id="footer_form" className={styles.footer_form}></div>

            <div className="flex flex-wrap gap-2">
              <button className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </button>

              <button className="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </button>

              <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                </svg>
              </button>
            </div>
             
          </div>
          <div className="col-span-1">
            <h3 className="text-1xl font-extrabold ">
              Locations
            </h3>
            <div className="flex flex-col lg:flex-row  items-center lg:pl-4 lg:w-1/2">
              <a href="">Item 1</a> | <a href="">Item 2</a>
            </div>
          </div>
          
        </div>
        <div className="col-span-3 md:flex pt-4 content-center">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              { headerData.footer.menuItems.nodes.length ? headerData.footer.menuItems.nodes.map( menuItem => (
                      
                  <li className="hover:text-darkblue px-3" key={ menuItem.id }>
                    <Link  href={ menuItem.url ?? '/' }>
                       <a dangerouslySetInnerHTML={ { __html: menuItem.label } }/>
                    </Link>   /   
                  </li>
                
              )) : null }
            </ul>
        </div>

      </Container>
    </footer>
  )
}
