import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'
import Navbar from '#/components/Navbar'
import { Footer } from '#/components/Footer'
import { Features } from '#/components/Features'
import Hero from '#/components/Hero'
import { Collection } from '#/components/Collection'
import { Banners } from '#/components/Banners'
import { Inquiry } from '#/components/Inquiry'
import { Banner2 } from '#/components/Banner2'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'RS Enterprises | Premium Sports Shoes Manufacturer',
      },
      {
        name: 'description',
        content: 'RS Enterprises manufactures premium, high-performance athletic footwear, running shoes, and sports shoes. OEM/ODM bulk shoe manufacturing and custom brand design services.',
      },
      {
        name: 'keywords',
        content: 'sports shoe manufacturer, footwear supplier, OEM shoes, bulk shoe production, custom running shoes, RS Enterprises',
      }
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Navbar />
        <main>
          <Hero />
          {children}
          <Collection />
          <Banners />
          <Features />
          <Banner2 />
          <Inquiry />
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
