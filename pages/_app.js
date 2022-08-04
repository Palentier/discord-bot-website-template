import '../styles/globals.css'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )

}

export default MyApp
