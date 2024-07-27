import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "url shortener",
  description: "shorten urls",

  authors: [
    {
      name: "dan",
      url: "https://daniel.rest",
    },
  ],

  metadataBase: new URL("https://link.daniel.rest"),

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://link.daniel.rest",
    siteName: "sshort",
    title: "url shortener",
  },

  // Twitter
  twitter: {
    title: "url shortener",
    description: "shorten urls",
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="min-h-screen px-8 py-10 md:px-16 bg-neutral-950 flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}
