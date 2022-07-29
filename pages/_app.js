import { BaseLayout } from '@components/ui/layout'
import '@styles/globals.css'
import { NotificationProvider } from 'web3uikit'


function MyApp({ Component, pageProps }) {
  return (
  
    
    
      <NotificationProvider>
           <BaseLayout>
            <Component {...pageProps} />
            </BaseLayout>
      </NotificationProvider>
   
   
   
  )
}

export default MyApp
 