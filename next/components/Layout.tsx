import Head from 'next/head'
import Footer from './Footer'
import Nav from './Nav'

export const siteTitle = "Mey's Aquatics"

const routes = [
  { path: '/', name: 'Home' },
  { path: '/stock/', name: 'Live Stock' },
  { path: '/about/', name: 'About' },
  { path: '/contact/', name: 'Contact' },
]

export default function Layout({
  children,
}: React.PropsWithChildren<unknown>): JSX.Element {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#000000" />

        {/* <!-- favicon --> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="%PUBLIC_URL%/apple-touch-icon.png?v=m2LyxxwekO"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="%PUBLIC_URL%/favicon-32x32.png?v=m2LyxxwekO"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="%PUBLIC_URL%/favicon-16x16.png?v=m2LyxxwekO"
        />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json?v=m2LyxxwekO" />
        <link
          rel="mask-icon"
          href="%PUBLIC_URL%/safari-pinned-tab.svg?v=m2LyxxwekO"
          color="#3fd170"
        />
        <link
          rel="shortcut icon"
          href="%PUBLIC_URL%/favicon.ico?v=m2LyxxwekO"
        />
        <meta name="apple-mobile-web-app-title" content="Mey's Aquatics" />
        <meta name="application-name" content="Mey's Aquatics" />
        <meta name="msapplication-TileColor" content="#3fd170" />
        <meta name="theme-color" content="#3fd170" />

        {/* <!-- facebook open graph --> */}
        <meta property="og:image:width" content="279" />
        <meta property="og:image:height" content="279" />
        <meta
          property="og:description"
          content="We have a wide selection of fish, including rare and endangered species. Check them out!"
        />
        <meta property="og:title" content="Mey's Aquatics" />
        <meta property="og:url" content="https://www.meysaquatics.com/" />
        <meta
          property="og:image"
          content="https://www.meysaquatics.com/og-image.jpg"
        />

        <title>{`Mey's Aquatics`}</title>

        {/* <!-- fonts --> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="body-container">
        <div className="body-content" data-test="loaded">
          <Nav />
          <main>{children}</main>
        </div>
        <Footer routes={routes} />
      </div>
    </div>
  )
}
