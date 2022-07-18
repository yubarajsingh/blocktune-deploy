import { BaseLayout } from '@components/ui/layout'
import '@styles/globals.css'
import { NotificationProvider } from 'web3uikit'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    
    
    <MoralisProvider
    appId='aTW6Sa9osvQUnIsN5KPRa0RGjjXjD28sHWf5ntkN'
    serverUrl='https://maj456w4jhy1.usemoralis.com:2053/server'
    >
      <NotificationProvider>
           <BaseLayout>
            <Component {...pageProps} />
            </BaseLayout>
      </NotificationProvider>
      </MoralisProvider>
   
   
  )
}

export default MyApp
 