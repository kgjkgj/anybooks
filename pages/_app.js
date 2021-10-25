import '../styles/globals.css'
import '../scss/Fom.scss'
import '../scss/Manager.scss'
import '../scss/OverLay.scss'
import '../scss/SideReviewBooks.scss'
import '../scss/Pagination.scss'
import '../scss/NavMobile.scss'


import Layout from '../Layout/Home'

function MyApp({ Component, pageProps }) {
  return  <Layout>
            <Component {...pageProps} />
          </Layout>
  
}

export default MyApp
