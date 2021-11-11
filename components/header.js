import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Header(headerData) {
   // const { headerData } = menuItems || {};
    //const { pageTitle, menuItems } = headerData || {};

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    console.log(headerData);
    console.log("ˆˆˆ");
    
    return (
        <header>
        <nav  className="flex justify-between bg-gradient-to-t from-lightblue to-gray2  text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full ">
            <a className="text-3xl font-heading w-1/4" href="#">
            Logo
            </a>
            
            {/* //Desktop menu */}
            <div className="hidden md:flex w-3/4 pt-2 content-center justify-between md:justify-end ">
                <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                { headerData.header.menuItems.nodes.length ? headerData.header.menuItems.nodes.map( menuItem => (
                        
                        <li className="hover:text-darkblue px-4"><Link key={ menuItem.id } href={ menuItem.url ?? '/' }>
                            <a dangerouslySetInnerHTML={ { __html: menuItem.label } }/>
                        </Link></li>
                    ) ) : null }
                        
                </ul>
            </div>
            </div>
        
            <a className="navbar-burger self-center mr-12 xl:hidden" onClick={handleClick} href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg> 
            </a> 
        </nav>
        {/* //Hamburguer menu */}
        <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto bg-lightblue`}>
		    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            { headerData.header.menuItems.nodes.length ? headerData.header.menuItems.nodes.map( menuItem => (
                        
                <Link key={ menuItem.id } href={ menuItem.url ?? '/' }>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ' dangerouslySetInnerHTML={ { __html: menuItem.label } }/>
                </Link>
            ) ) : null }
          </div>
        </div>


        <h1>{headerData.header.pageTitle}</h1>

        </header>
    )
}