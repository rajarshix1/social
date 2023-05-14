import { AppContextWrapper } from '@/context/AppContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (<AppContextWrapper> 
    <Component {...pageProps} />
    </AppContextWrapper>)
}
