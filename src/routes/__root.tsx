import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'


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
       {children}
        <Scripts />
      </body>
    </html>
  )
}
