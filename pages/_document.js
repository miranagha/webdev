// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, { Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
          <body className="custom_class">
             <Main />
            <NextScript />
          </body>
      </html>
        )
      }
}