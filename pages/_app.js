import Navbar from '@/components/navbar'
import { AppContextWrapper } from '@/context/AppContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (<AppContextWrapper> 
    <Navbar/>
    <Component {...pageProps} />
    </AppContextWrapper>)
}
