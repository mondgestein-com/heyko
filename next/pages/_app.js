import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Link from 'next/link';

import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  let { heygent } = router.query

  if (heygent) {
    localStorage.setItem('heygency_heygent', heygent);
  } else {
    try {
      heygent = localStorage.getItem('heygency_heygent');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Head>
        <title>HEYGENCY! - Agentur für Web-, App- und E-Commerce-Lösungen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="drawer" className="drawer drawer-end">
        <input id="app-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="navbar bg-primary text-primary-content">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">
                <Link href="/">
                  HEYGENCY!
                </Link></a>
            </div>
            <div className="flex-none">
              <label for="app-drawer" className="drawer-button btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></label>
            </div>
          </div>
          <div className="background p-3 min-h-screen">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
        <div className="drawer-side">
          <label for="app-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link href="/">
                <div class="logo">
                  <Logo />
                </div>
              </Link>
            </li>
            <li><a>Kontakt.</a></li>
            <li><a>Angebote.</a></li>
            <li><a>Referenzen.</a></li>
            <li><a>Blog.</a></li>
            <li className="text-2xs pt-12"><a>weitere Formulare.</a></li>
            <li className="text-2xs"><a>Katalog v.1-Q3 2022.</a></li>
            <li className="text-2xs"><a>HEYGENCY! Whitepaper</a></li>
            <li className="text-2xs"><a>{heygent ? 'Ihr aktueller HEYGENT: ' + heygent + '.' : 'HEYGENT LOGIN.'}</a></li>
          </ul>
        </div>
      </div>
    </>)
}

export default MyApp
