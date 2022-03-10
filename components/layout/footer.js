import Container from '../layout/container'
import Link from 'next/link';


export default function Footer(headerData) {
    // console.log("##Footer##");
    // console.log(headerData.footer.menuItems.nodes);
    // console.log("###");
  return (
    <footer className="bg-accent-1 border-t border-accent-2">

      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          
          <h3 className="text-4xl lg:text-5xl  tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            WP example with graphql
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a href="">Item 1</a> | <a href="">Item 1</a>
          </div>
        </div>
        <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
          Click me
        </button>
        <div className="hidden md:flex w-3/4 pt-2 content-center justify-between md:justify-end ">
        <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                { headerData.footer.menuItems.nodes.length ? headerData.footer.menuItems.nodes.map( menuItem => (
                        
                        <li className="hover:text-darkblue px-4" key={ menuItem.id }><Link  href={ menuItem.url ?? '/' }>
                            <a dangerouslySetInnerHTML={ { __html: menuItem.label } }/>
                        </Link></li>
                    ) ) : null }
                        
                </ul>
            </div>


      </Container>
    </footer>
  )
}
