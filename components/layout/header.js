import Head from 'next/head';
import Meta from '../layout/meta'
import {useTheme} from 'next-themes'


import Link from 'next/link';
import React, { useState, useRef } from 'react';

import { generateUrlWithQueryString } from '../../lib/utils/utm_params'
import { useRouter } from "next/router";


import NavSearch from '../search/search-nav';

export default function Header(headerData, ref) {


    const  menuItems  = headerData.header || {};


    console.log("🎉");
console.log(menuItems);
console.log("🎉🎉");
    //const { pageTitle, menuItems } = headerData || {};

    const [active, setActive] = useState(false);
    //let childItemsTotal = 0;
    const {theme, setTheme} = useTheme()

    const handleClick = () => {
        setActive(!active);
    };

    //const childItemRef = React.useRef([React.createRef(), React.createRef()]);
    const childItemRef = React.useRef(null)

    const handleHover = () => {
        // Commented: the case if need to work with an array of ref - useful
        //  for(let i=0; i<childItemsTotal ; i++){
        //     childItemRef.current[i].current.style.display = "block";
        //  }
        //childItemRef.current.style.display = "block"; 
    }

    const handleHoverExit = () => {
        //childItemRef.current.style.display = "none";  
    }

/* to keep utms params */

// var router = useRouter();
// const params =  generateUrlWithQueryString(router.query).length>0 ? generateUrlWithQueryString(router.query) : "";
 const params = ""

    
    return (
        <> 
        {/* <Meta headerData={headerData.metaData}/> */}

        <header>
            
        <nav  className="flex justify-between bg-gradient-to-t from-lightblue to-gray2  text-white w-screen dark:from-black to-gray2">
            <div className="px-5 xl:px-12 py-6 flex w-full cursor-pointer">
                <Link key="Main_Logo" className="text-3xl font-heading w-1/4 cursor-pointer" href="/">
                <img src='../kgb_logo.png' width="50px" height="auto" />
                </Link>    
                
            {/* //Desktop menu */}
                <div className="hidden md:flex w-full pt-2  md:justify-end ">
                    <ul role="list" className="list-reset flex justify-between flex-1 md:flex-none items-center">
                    { menuItems.data ? menuItems.data.map( menuItem => (
   
   
                        (menuItem.attributes.title != null ) ? 
                        
                        <>

                            <li  key={ menuItem.attributes.title } className="hover:text-darkblue px-4 parent-main-nav" 
                                onMouseMove={(e) => handleHover(e)}>
                                <Link legacyBehavior key={ menuItem.attributes.title }  href={ menuItem.attributes.url+params ?? '/' }>
                                    <a dangerouslySetInnerHTML={ { __html: menuItem.attributes.title } }/>
                                </Link>
                            </li>

                           
                        </> 

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
                {/* { headerData.header.menuItems.nodes.length ? headerData.header.menuItems.nodes.map( menuItem => (
                            
                    <Link key={ menuItem.id }  href={ menuItem.url+params ?? '/' }>
                        <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ' dangerouslySetInnerHTML={ { __html: menuItem.label } }/>
                    </Link>
                ) ) : null } */}
            </div>
            </div>
            <div className="bg-gradient-to-t from-orange to-darkorange hover:text-darkblue px-4 pt-10" >
                <Link key="Contact-us"  href={`/contact-us${params}`} legacyBehavior>
                        <a dangerouslySetInnerHTML={ { __html: "Contact" } }/>
                </Link>
            </div>
        </nav>

        <h1>{headerData.pageTitle}</h1>
        </header>
        </>
    )
}