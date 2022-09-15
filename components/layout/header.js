import Head from 'next/head';
import Meta from '../layout/meta'
import {useTheme} from 'next-themes'


import Link from 'next/link';
import React, { useState, useRef } from 'react';


import NavSearch from '../search/search-nav';

export default function Header(headerData, ref) {
    // const { headerData } = menuItems || {};
    //const { pageTitle, menuItems } = headerData || {};

    const [active, setActive] = useState(false);
    //let childItemsTotal = 0;
    const {theme, setTheme} = useTheme()

    const handleClick = () => {
        setActive(!active);
    };

    // console.log("@@@");
    // console.log(headerData.metaData);
    // console.log("@@@");

    //const childItemRef = React.useRef([React.createRef(), React.createRef()]);
    const childItemRef = React.useRef(null)

    const handleHover = () => {
        // Commented: the case if need to work with an array of ref - useful
        //  for(let i=0; i<childItemsTotal ; i++){
        //     childItemRef.current[i].current.style.display = "block";
        //  }
        childItemRef.current.style.display = "block"; 
    }

    const handleHoverExit = () => {
        childItemRef.current.style.display = "none";  
    }

/* to keep utms params */

/*final utm params*/ 
    
    return (
        <> 
        <Meta headerData={headerData.metaData}/>

        <header>
            
        <nav  className="flex justify-between bg-gradient-to-t from-lightblue to-gray2  text-white w-screen dark:from-black to-gray2">
            <div className="px-5 xl:px-12 py-6 flex w-full cursor-pointer">
                <Link key="Main_Logo" className="text-3xl font-heading w-1/4 cursor-pointer" href="/">
                <img src='../gl_logo_g.png' width="50px" height="auto" />
                </Link>    
                
            {/* //Desktop menu */}
                <div className="hidden md:flex w-full pt-2  md:justify-end ">
                    <ul role="list" className="list-reset flex justify-between flex-1 md:flex-none items-center">
                    { headerData.header.menuItems.nodes.length ? headerData.header.menuItems.nodes.map( menuItem => (
   
                        (menuItem.childItems.nodes.length > 0 && menuItem.parentId === null) ? 
                        <>
                            <li  key={ menuItem.databaseId } className="hover:text-darkblue px-4 parent-main-nav" 
                                onMouseMove={(e) => handleHover(e)}>
                                <Link key={ menuItem.id }  href={ menuItem.path ?? '/' }>
                                    <a dangerouslySetInnerHTML={ { __html: menuItem.label } }/>
                                </Link>
                            </li>

                            <div ref={childItemRef} 
                            id="dropdownNavbar" 
                            className="z-10 bg-darkblue divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600 block z-20" 
                            style={{ position: 'absolute', margin: '0px', transform: 'translate(85px, 80px)', display: 'none'}} 
                            onMouseMove={(e) => handleHover(e)}
                            onMouseOut={(e) => handleHoverExit(e)}>
                                <ul role="list" className='py-1 text-sm text-gray-700 dark:text-gray-400' aria-labelledby='dropdownLargeButton'>
                                {/* <li ref={childItemRef.current[index]} ref={childItemRef.current[0]} style={{ display: 'none' }} className="hover:text-darkblue px-4 child-item-main-nav"  key="asdasd">
                                </li> */}
                                {(menuItem.childItems.nodes.map( (childItem, index) => (
                                    <>
                                    {/* { childItemsTotal++ } */}
                                        <li  className="px-5 py-2 hover:text-gray2"  key={ childItem.databaseId }>
                                            <Link  key={ childItem.id }  href={ childItem.path ?? '/' }>
                                                <a dangerouslySetInnerHTML={ { __html: childItem.label } }/>
                                            </Link>
                                        </li>
                                    </>
                                ))) } 
                                </ul>
                            </div>
                        </> 
                        : 
                        (menuItem.parentId === null) ? 
                        <li className="hover:text-darkblue px-4 no-parent" >
                            <Link key={ menuItem.id }  href={ menuItem.path ?? '/' }>
                                <a dangerouslySetInnerHTML={ { __html: menuItem.label } }/>
                            </Link>
                        </li>
                        :null
                        ) ) : null 
                    }
                    </ul>
                    <NavSearch/>
                    <button
                        alt-text="Dark/Light Mode"
                        className='px-6 py-2  text-white dark:text-white cursor-pointer hover:opacity-50'
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        {theme === 'dark' ? '☀' : '☽'}
                    </button> 
                </div>
                
               

            </div>

             
            <a className="navbar-burger self-center mr-12 md:hidden" onClick={handleClick} href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg> 
            </a> 
        
        {/* //Hamburguer menu */}
            <div className={`${active ? '' : 'hidden'} md:hidden lg:hidden w-full lg:inline-flex lg:flex-grow lg:w-auto bg-lightblue`}>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                { headerData.header.menuItems.nodes.length ? headerData.header.menuItems.nodes.map( menuItem => (
                            
                    <Link key={ menuItem.id }  href={ menuItem.url ?? '/' }>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ' dangerouslySetInnerHTML={ { __html: menuItem.label } }/>
                    </Link>
                ) ) : null }
            </div>
            </div>
            <div className="bg-gradient-to-t from-orange to-darkorange hover:text-darkblue px-4 pt-10" >
                <Link key="Contact-us"  href='/contact-us'>
                        <a dangerouslySetInnerHTML={ { __html: "Contact" } }/>
                </Link>
            </div>
        </nav>

        <h1>{headerData.pageTitle}</h1>
        </header>
        </>
    )
}