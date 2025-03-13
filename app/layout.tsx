import type React from "react"
import "@/app/globals.css"
import type { Metadata, Viewport } from "next"
import { ThemeProvider } from "next-themes"
import { Poppins } from "next/font/google"
import { pageMeta } from "@/lib/seo"
import Script from "next/script"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(pageMeta.siteUrl),
  title: {
    default: pageMeta.title,
    template: `%s | ${pageMeta.siteName}`,
  },
  description: pageMeta.description,
  keywords: pageMeta.keywords,
  authors: [{ name: "ICTACA- CAHCET Dhanush Kandhan & Abubakkar Siddiq" }],
  creator: "ICTACA 2025",
  publisher: "C Abdul Hakeem College of Engineering and Technology",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: pageMeta.locale,
    url: pageMeta.siteUrl,
    title: pageMeta.title,
    description: pageMeta.description,
    siteName: pageMeta.siteName,
    images: [
      {
        url: `${pageMeta.siteUrl}${pageMeta.ogImage}`,
        width: 1200,
        height: 630,
        alt: pageMeta.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.title,
    description: pageMeta.description,
    creator: pageMeta.twitterHandle,
    images: [`${pageMeta.siteUrl}${pageMeta.ogImage}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: pageMeta.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>

        {/* Structured data for SEO */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageMeta.organizationSchema) }}
        />
        <Script
          id="schema-event"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageMeta.eventSchema) }}
        />
      </body>
    </html>
  )
}

