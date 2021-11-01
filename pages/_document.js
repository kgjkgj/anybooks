import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
        <Html lang="en">
        <Head>
            <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3885595013934426" crossorigin="anonymous"></script>
        </Head>
        <body>
            <Main />
            <NextScript />
            
        </body>
    </Html>
    )
  }
}

export default MyDocument