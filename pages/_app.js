import { BaseLayout } from '@components/ui/layout'
import '@styles/globals.css'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
    serverUrl='https://ycf0s7ye7gga.usemoralis.com:2053/server'
    appId='rfz7hidMzRN4UZ0WToKPnAJ8xcNUh0kQrQSHhwJe'
    >
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
    </MoralisProvider>
  )
}

export default MyApp
 