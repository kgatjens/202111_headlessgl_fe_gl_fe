import Container from './container'

export default function Footer() {
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
      </Container>
    </footer>
  )
}
