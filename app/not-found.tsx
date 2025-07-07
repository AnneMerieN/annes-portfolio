import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-pink-500 mb-4">404</h1>
        <h2 className="text-2xl text-white mb-6">Project Not Found</h2>
        <p className="text-zinc-400 mb-8">The project you're looking for doesn't exist or has been moved.</p>
        <Link
          href="/#projects"
          className="px-6 py-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 hover:border-pink-500 hover:text-pink-500 transition-all duration-300"
        >
          Return to Projects
        </Link>
      </div>
    </div>
  )
}
