import Document, { Html, Head, Main, NextScript } from 'next/document'

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
