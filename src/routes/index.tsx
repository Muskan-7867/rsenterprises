import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  // All sections are rendered in the root layout for single-page portfolio experience
  return null
}