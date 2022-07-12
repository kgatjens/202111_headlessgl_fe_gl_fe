import Head from 'next/head';
import Meta from '../layout/meta'

import Link from 'next/link';
import React, { useState, useRef } from 'react';


import NavSearch from '../search/search-nav';

export default function Header(headerData, ref) {
    // const { headerData } = menuItems || {};
    //const { pageTitle, menuItems } = headerData || {};

    const [active, setActive] = useState(false);
    let childItemsTotal = 0;

    const handleClick = () => {
        setActive(!active);
    };

    // console.log("@@@");
    // console.log(headerData.metaData);
    // console.log("@@@");

    const childItemRef = React.useRef([React.createRef(), React.createRef()]);
    //const refsList = useRef([]);

    const handleHover = () => {
        //child-item-main-nav block
        console.log(" in in in ")
        console.log(childItemsTotal)
        
         for(let i=0; i<childItemsTotal ; i++){
            childItemRef.current[i].current.style.display = "block";
         }
        //childItem.current.style.display = "block";
       
    }

    const handleHoverExit = () => {
        
        console.log(" out out out ")
        for(let i=0; i<childItemsTotal ; i++){
            childItemRef.current[i].current.style.display = "none";
         }
        //childItem.current.style.display = "none";
        
    }
    
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
   
                        (menuItem.childItems.nodes.length > 0 && menuItem.parentId === null) ? 
                        <>
                            <li  key={ menuItem.id } className="hover:text-darkblue px-4 parent-main-nav" 
                                onMouseMove={(e) => handleHover(e)}
                                onMouseOut={(e) => handleHoverExit(e)}
                            >
                                <Link key={ menuItem.id }  href={ menuItem.path ?? '/' }>
                                    <a dangerouslySetInnerHTML={ { __html: menuItem.label } }/>
                                </Link>
                            </li>
                            <div id="dropdownNavbar" class="z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600 block" style={{ position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(893px, 3149px)'}} data-popper-placement="bottom">
                                <ul className='py-1 text-sm text-gray-700 dark:text-gray-400' aria-labelledby='dropdownLargeButton'>
                                {/* <li ref={childItemRef.current[0]} style={{ display: 'none' }} className="hover:text-darkblue px-4 child-item-main-nav"  key="asdasd">
                                        <Link key="sadsad"  href="sdasdasd" >
                                            <a dangerouslySetInnerHTML={ { __html: "childItem.label" } }/>
                                        </Link>
                                </li> */}

                                {(menuItem.childItems.nodes.map( (childItem, index) => (
                                    <>
                                    
                                    { childItemsTotal++ }
                                    <li ref={childItemRef.current[index]} style={{ display: 'none' }} className=""  key={ childItem.id }>
                                        <Link className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white' key={ childItem.id }  href={ childItem.path ?? '/' }>
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
            <div className="bg-gradient-to-t from-orange to-darkorange hover:text-darkblue px-4 py-6" >
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