import "@/app/globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { DM_Sans } from "next/font/google"
import Sidebar from "@/components/sidebar"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
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
      <body className={`${dmSans.variable} font-sans`}>
        <Sidebar />
        <div className="md:pl-[284px] min-h-screen">
          <main>{children}</main>
        </div>
        <SpeedInsights />
      </body>
    </html>
  )
}
