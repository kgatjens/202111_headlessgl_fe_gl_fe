import Footer from '../layout/footer'
import Meta from '../layout/meta'

export default function Layout({ children }) {
    return (
      <>
        <Meta />
          <main className="font-sans leading-normal tracking-normal">{children}</main>
        <Footer />
      </>
    )
  }
  