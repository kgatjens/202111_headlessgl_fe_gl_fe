import Head from 'next/head';
import Link from 'next/link';



export default function Header(headerData) {
   // const { headerData } = menuItems || {};
    //const { pageTitle, menuItems } = headerData || {};

    console.log(headerData);
    console.log("ˆˆˆ");
    
    return (
        <header>
        <nav  className="flex justify-between bg-gradient-to-t from-lightblue to-gray2  text-white w-screen">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-heading" href="#">
          Logo Here.
        </a>
        
        <ul className="hidden md:flex px-4 mx-auto  font-heading space-x-12">
          <li><a className="hover:text-gray-200" href="#">Home</a></li>
          <li><a className="hover:text-gray-200" href="#">Catagory</a></li>
          <li><a className="hover:text-gray-200" href="#">Collections</a></li>
          <li><a className="hover:text-gray-200" href="#">Contact Us</a></li>
        </ul>
        <div className="hidden xl:flex items-center space-x-5 items-center">
          <a claclassNamess="hover:text-gray-200" href="#">
           
          </a>
          <a className="flex items-center hover:text-gray-200" href="#">
            
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
          </a>
          <a className="flex items-center hover:text-gray-200" href="#">
              
          </a>
          
        </div>
      </div>
      
      <a className="xl:hidden flex mr-6 items-center" href="#">
        
        <span className="flex absolute -mt-5 ml-4">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
          </span>
        </span>
      </a>
      <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
          
      </a>
        
            { headerData.header.menuItems.nodes.length ? headerData.header.menuItems.nodes.map( menuItem => (
                
                <Link key={ menuItem.url } href={ menuItem.url ?? '/' }>
                    <a 
                        dangerouslySetInnerHTML={ { __html: menuItem.title } }/>
                </Link>
			) ) : null }
        </nav>
        <h1>{headerData.header.pageTitle}</h1>

        </header>
    )
}