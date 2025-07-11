import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Anne Merie's Portfolio",
  description: "A modern, sleek personal portfolio website",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
        </ThemeProvider>
        <SpeedInsights /> {/* ← Add this here */}
      </body>
    </html>
  )
}
