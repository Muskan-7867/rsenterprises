import { createFileRoute } from '@tanstack/react-router'
import Navbar from '#/components/Navbar'
import { Footer } from '#/components/Footer'
import { Features } from '#/components/Features'
import Hero from '#/components/Hero'
import { Collection } from '#/components/Collection'
import { Banners } from '#/components/Banners'
import { Inquiry } from '#/components/Inquiry'
import { Banner2 } from '#/components/Banner2'

export const Route = createFileRoute('/')({
  head: ({ loaderData }) => ({

    meta: [
      { title: "RS Enterprises | Premium Sports Shoe Manufacturer & Exporter" },
      { name: 'description', content: "RS Enterprises is a pioneer in high-performance sports shoe manufacturing. We blend biomechanics, cutting-edge material science, and precision craftsmanship to power athletes globally." },
      {
        name: "keywords",
        content:
          "sports shoes manufacturer, footwear manufacturer, running shoes manufacturer, athletic footwear supplier, sports shoe exporter, OEM footwear manufacturing, RS Enterprises"
      },

      { property: 'og:title', content: "RS Enterprises | Premium Sports Shoe Manufacturer & Exporter" },
      { property: 'og:description', content: "RS Enterprises is a pioneer in high-performance sports shoe manufacturing. We blend biomechanics, cutting-edge material science, and precision craftsmanship to power athletes globally." },
      { property: 'og:image', content: "https://rs-enterprises-shoes.vercel.app/og.webp" },
      { property: 'og:type', content: 'website' },
      {
        property: "og:url",
        content: "https://rs-enterprises-shoes.vercel.app"
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: "RS Enterprises Premium Sports Footwear Manufacturing",
      },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: "RS Enterprises | Premium Sports Shoe Manufacturer & Exporter" },
      { name: 'twitter:description', content: "RS Enterprises is a pioneer in high-performance sports shoe manufacturing. We blend biomechanics, cutting-edge material science, and precision craftsmanship to power athletes globally." },
      { name: 'twitter:image', content: "https://rs-enterprises-shoes.vercel.app/og.webp" },
      {
        name: "twitter:site",
        content: "@rsenterprises",
      },
      {
        name: "twitter:image:alt",
        content: "RS Enterprises Premium Sports Footwear Manufacturing",
      },

    ],
    links: [
      {
        rel: 'canonical',
        href: `https://rs-enterprises-shoes.vercel.app`,
      },
      {
        rel: 'alternate',
        href: `https://rsenterprises-shoes.vercel.app`,
      },

    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: "RS Enterprises | Premium Sports Shoe Manufacturer & Exporter",
          description: "RS Enterprises is a pioneer in high-performance sports shoe manufacturing. We blend biomechanics, cutting-edge material science, and precision craftsmanship to power athletes globally.",
          url: "https://rs-enterprises-shoes.vercel.app",
          image: "https://rsenterprises-shoes.vercel.app/og.webp",
          author: {
            '@type': 'Person',
            name: "RS Enterprises",
          },
          datePublished: "",
        }),
      },
    ],
  }),
  component: Home,
})

function Home() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Collection />
        <Banners />
        <Features />
        <Banner2 />
        <Inquiry />
      </main>
      <Footer />
    </>
  )
}