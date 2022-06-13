import { Html, Head, Main, NextScript } from 'next/document'
import { getRandomTheme } from '../helpers'

export default function Document() {
  const theme = getRandomTheme();
  return (
    <Html data-theme={theme}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}