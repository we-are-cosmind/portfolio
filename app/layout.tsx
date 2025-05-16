import "./globals.css"

import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import type { Metadata } from "next"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cosmind - Explorando el Universo Digital",
  description:
    "Transformamos ideas en realidad, utilizando tecnología como herramienta e innovación como fuerza impulsora.",
    icons: {
      icon: './favicon.ico',  // Favicon general
      shortcut: '/favicon.ico', // Atajo
    }, 
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
