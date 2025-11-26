import Link from "next/link";

export default function Hobbies() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-[#333]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight hover:text-[#ff3333] transition-colors">
            KD
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-[#ff3333] transition-colors">Home</Link>
            <Link href="/hobbies" className="text-[#ff3333]">Hobbies</Link>
            <Link href="/blog" className="hover:text-[#ff3333] transition-colors">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <section className="py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Hobbies
          </h1>
          <p className="text-lg text-[#888] mb-12 max-w-2xl">
            When I&apos;m not coding, you can find me pursuing these passions.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Hobby 1 - Automotive */}
            <div className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
              <div className="text-4xl mb-4">🏎️</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff3333] transition-colors">
                Automotive
              </h3>
              <p className="text-[#888] text-sm">
                Passionate about cars, racing, and everything with an engine. Track days and car meets are my therapy.
              </p>
            </div>

            {/* Hobby 2 - Gaming */}
            <div className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff3333] transition-colors">
                Gaming
              </h3>
              <p className="text-[#888] text-sm">
                Sim racing and competitive gaming. Always looking for the perfect lap time.
              </p>
            </div>

            {/* Hobby 3 - Photography */}
            <div className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
              <div className="text-4xl mb-4">📷</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff3333] transition-colors">
                Photography
              </h3>
              <p className="text-[#888] text-sm">
                Capturing moments, especially automotive photography. Light trails and rolling shots.
              </p>
            </div>

            {/* Hobby 4 - Music */}
            <div className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff3333] transition-colors">
                Music
              </h3>
              <p className="text-[#888] text-sm">
                From electronic beats to rock classics. Music fuels the drive.
              </p>
            </div>

            {/* Hobby 5 - Fitness */}
            <div className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff3333] transition-colors">
                Fitness
              </h3>
              <p className="text-[#888] text-sm">
                Staying sharp both mentally and physically. Consistency is key.
              </p>
            </div>

            {/* Hobby 6 - Travel */}
            <div className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff3333] transition-colors">
                Travel
              </h3>
              <p className="text-[#888] text-sm">
                Exploring new roads and cultures. Every journey is a new adventure.
              </p>
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
