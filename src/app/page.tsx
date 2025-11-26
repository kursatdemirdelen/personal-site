import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-[#333]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight hover:text-[#ff3333] transition-colors">
            KD
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-[#ff3333]">Home</Link>
            <Link href="/hobbies" className="hover:text-[#ff3333] transition-colors">Hobbies</Link>
            <Link href="/blog" className="hover:text-[#ff3333] transition-colors">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        {/* About Section */}
        <section className="py-16 border-b border-[#333]">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Kürşat Demirdelen
          </h1>
          <p className="text-lg text-[#888] mb-4 max-w-2xl">
            Developer & Automotive Enthusiast. Building digital experiences with a passion for speed and precision.
          </p>
          <p className="text-[#888] max-w-2xl leading-relaxed">
            This is a placeholder for your personal introduction. Share your background, 
            expertise, and what drives you. Make it memorable.
          </p>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <h2 className="text-2xl font-bold mb-8 tracking-tight">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Project Card 1 */}
            <div className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff3333] transition-colors">
                Project Alpha
              </h3>
              <p className="text-[#888] text-sm mb-4">
                A brief description of your first project. What problem does it solve? What technologies did you use?
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">TypeScript</span>
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">Next.js</span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff3333] transition-colors">
                Project Beta
              </h3>
              <p className="text-[#888] text-sm mb-4">
                Another project showcase. Describe the impact and your role in building it.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">React</span>
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">Node.js</span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff3333] transition-colors">
                Project Gamma
              </h3>
              <p className="text-[#888] text-sm mb-4">
                Placeholder for a third project. Update with your actual work.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">Python</span>
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">FastAPI</span>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff3333] transition-colors">
                Project Delta
              </h3>
              <p className="text-[#888] text-sm mb-4">
                One more project to complete the grid. Add your own content here.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">Go</span>
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">Docker</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#333] py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-[#888] text-sm">
          <p>&copy; {new Date().getFullYear()} Kürşat Demirdelen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
