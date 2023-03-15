import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // SSR support for styled-components
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/display-name
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/images/favicon/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="apple-touch-icon"
            href="/images/favicon/apple-touch-icon.png"
          />
          <link
            rel="alternate"
            type="application/rss+xml"
            href="/rss.xml"
            title="Main RSS Feed"
          />
          <meta name="theme-color" content="#960462" />
          <meta
            name="google-site-verification"
            content="DQjzoQ_jeforeKNzt5jAvs0u0_gxGJKYoaYfpGdXt2A"
          />
          <link
            rel="webmention"
            href="https://webmention.io/maggieappleton.com/webmention"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
