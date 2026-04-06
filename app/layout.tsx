import "@/app/globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Arimo, Space_Grotesk, Inter } from "next/font/google"
import Sidebar from "@/components/sidebar"

const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-machina",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-helvetica",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "Anne Merie Nguyen — Portfolio",
  description: "Product Designer + Developer portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${arimo.variable} ${spaceGrotesk.variable} ${inter.variable} font-sans`}>
        <Sidebar />
        <div className="md:pl-[284px] min-h-screen">
          <main>{children}</main>
        </div>
        <SpeedInsights />
      </body>
    </html>
  )
}
