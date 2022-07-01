import Head from 'next/head';
import Meta from '../layout/meta'

import Link from 'next/link';
import { useState } from 'react';

import NavSearch from '../search/search-nav';

export default function Header(headerData) {
    // const { headerData } = menuItems || {};
    //const { pageTitle, menuItems } = headerData || {};

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    // console.log("@@@");
    // console.log(headerData.metaData);
    // console.log("@@@");
    
    return (
        <> 
        <Meta headerData={headerData.metaData}/>

        <header>
            
        <nav  className="flex justify-between bg-gradient-to-t from-lightblue to-gray2  text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full ">
                <Link key="Main Logo" className="text-3xl font-heading w-1/4" href="/">
                <a>Logo</a>
                </Link>
                <NavSearch/>

            {/* //Desktop menu */}
                <div className="hidden md:flex w-3/4 pt-2 content-center justify-between md:justify-end ">
                    <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                    { headerData.header.menuItems.nodes.length ? headerData.header.menuItems.nodes.map( menuItem => (
                            
                            (menuItem.parentId === null) ?  
                            (
                            <li className="hover:text-darkblue px-4" key={ menuItem.id }>
                                <Link  href={ menuItem.path ?? '/' }>
                                    <a dangerouslySetInnerHTML={ { __html: menuItem.label } }/>
                                </Link>
                            </li>
                            
                            
                            )
                             
                             :
                             (menuItem.childItems.nodes.length > 0) ? 
                        
                             (menuItem.childItems.nodes.map( childItem => (
                                <li className="hover:text-darkblue px-4 child hidden" key={ childItem.id }>
                                <Link  href={ childItem.path ?? '/' }>
                                    <a dangerouslySetInnerHTML={ { __html: childItem.label } }/>
                                    
                                </Link>
                                </li>
                             ))) 
                              
                             :null
                            
                            
                        ) ) : null 
                        }




                    </ul>
                </div>
                   
            </div>
            <div className="bg-gradient-to-t from-orange to-darkorange hover:text-darkblue px-4" >
                <Link key="Contact-us"  href='/contact-us'>
                        <a dangerouslySetInnerHTML={ { __html: "Contact Us" } }/>
                </Link>
            </div>
        
            <a className="navbar-burger self-center mr-12 md:hidden" onClick={handleClick} href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg> 
            </a> 
        </nav>
        {/* //Hamburguer menu */}
        <div className={`${active ? '' : 'hidden'} md:hidden lg:hidden w-full lg:inline-flex lg:flex-grow lg:w-auto bg-lightblue`}>
		    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            { headerData.header.menuItems.nodes.length ? headerData.header.menuItems.nodes.map( menuItem => (
                        
                <Link key={ menuItem.id }  href={ menuItem.url ?? '/' }>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ' dangerouslySetInnerHTML={ { __html: menuItem.label } }/>
                </Link>
            ) ) : null }
            <li className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white " key="mobile">
                    <Link key="Blogs-mobile"  href='/Blogs'>
                        <a dangerouslySetInnerHTML={ { __html: "Blogs" } }/>
                    </Link> 
                </li>
                <li className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white " key="contact-mobile">
                    <Link key="Contact-us-mobile" href='/contact-us'>
                        <a dangerouslySetInnerHTML={ { __html: "Contact Us" } }/>
                    </Link> 
                </li>
          </div>
        </div>
        


        <h1>{headerData.pageTitle}</h1>

        </header>
        </>
    )
}