import Head from 'next/head';
import Link from 'next/link';
import { isEmpty } from 'lodash';


export default function Header(headerData) {
   // const { headerData } = menuItems || {};
    //const { pageTitle, menuItems } = headerData || {};

    console.log(headerData);
    console.log("ˆˆˆ");
    
    return (
        <div>
        <h1>{headerData.header.pageTitle}</h1>
        <nav>
            { ! isEmpty( headerData.header.menuItems.nodes ) && headerData.header.menuItems.nodes.length ? headerData.header.menuItems.nodes.map( menuItem => (
                
                <Link key={ menuItem.url } href={ menuItem.url ?? '/' }>
                    <a 
                        dangerouslySetInnerHTML={ { __html: menuItem.title } }/>
                </Link>
			) ) : null }
        </nav>
        </div>
    )
}