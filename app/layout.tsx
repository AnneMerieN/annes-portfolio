import "@/app/globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Arimo } from "next/font/google"
import Sidebar from "@/components/sidebar"

const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
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
      <body className={`${arimo.variable} font-sans`}>
        <Sidebar />
        <div className="md:pl-[260px] min-h-screen">
          <main className="max-w-[1300px] mx-auto">{children}</main>
        </div>
        <SpeedInsights />
      </body>
    </html>
  )
}
