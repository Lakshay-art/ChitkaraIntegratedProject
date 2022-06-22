import Document, { Html, Head, Main, NextScript } from 'next/document'
import Banner from './components/Banner'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        {/* Cross-Origin-Opener-Policy: same-origin Cross-Origin-Embedder-Policy: require-corp */}
        <Head />
        <body>
          <Main />
          <NextScript>
          </NextScript>
        </body>
      </Html>
    )
  }
}

export default MyDocument

