import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children }) {
    return (
      <>
        <Meta />
          <main class="font-sans leading-normal tracking-normal">{children}</main>
        <Footer />
      </>
    )
  }
  