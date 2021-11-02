import type { AppProps } from 'next/app'
import 'styles/globals.css'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'bootstrap/dist/css/bootstrap.css'

import { LayoutProvider } from 'data/context/layoutContext'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  )
}
export default MyApp
