import Head from 'next/head';
import Link from 'next/link';



export default function Header(headerData) {
   // const { headerData } = menuItems || {};
    //const { pageTitle, menuItems } = headerData || {};

    console.log(headerData);
    console.log("ˆˆˆ");
    
    return (
        <div>
        <h1>{headerData.header.pageTitle}</h1>
        <nav>
            { headerData.header.menuItems.nodes.length ? headerData.header.menuItems.nodes.map( menuItem => (
                
                <Link key={ menuItem.url } href={ menuItem.url ?? '/' }>
                    <a 
                        dangerouslySetInnerHTML={ { __html: menuItem.title } }/>
                </Link>
			) ) : null }
        </nav>
        </div>
    )
}