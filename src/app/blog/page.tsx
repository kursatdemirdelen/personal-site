import Link from "next/link";

export default function Blog() {
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
            <Link href="/hobbies" className="hover:text-[#ff3333] transition-colors">Hobbies</Link>
            <Link href="/blog" className="text-[#ff3333]">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <section className="py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Blog
          </h1>
          <p className="text-lg text-[#888] mb-12 max-w-2xl">
            Thoughts, tutorials, and stories from the road.
          </p>

          <div className="space-y-8">
            {/* Blog Post 1 */}
            <article className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
              <div className="flex items-center gap-3 text-sm text-[#888] mb-3">
                <time>December 15, 2024</time>
                <span>•</span>
                <span>5 min read</span>
              </div>
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-[#ff3333] transition-colors">
                Getting Started with Next.js 14
              </h2>
              <p className="text-[#888] mb-4">
                A comprehensive guide to building modern web applications with the App Router, 
                Server Components, and all the new features in Next.js 14.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">Next.js</span>
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">React</span>
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">Tutorial</span>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
              <div className="flex items-center gap-3 text-sm text-[#888] mb-3">
                <time>November 28, 2024</time>
                <span>•</span>
                <span>8 min read</span>
              </div>
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-[#ff3333] transition-colors">
                The Art of Sim Racing
              </h2>
              <p className="text-[#888] mb-4">
                From beginner to competitive: my journey into the world of sim racing 
                and what I&apos;ve learned along the way about setup, technique, and mindset.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">Racing</span>
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">Hobbies</span>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="border border-[#333] rounded-lg p-6 hover:border-[#ff3333] transition-colors group">
              <div className="flex items-center gap-3 text-sm text-[#888] mb-3">
                <time>October 10, 2024</time>
                <span>•</span>
                <span>4 min read</span>
              </div>
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-[#ff3333] transition-colors">
                Building a Dark Theme Design System
              </h2>
              <p className="text-[#888] mb-4">
                How to create a cohesive dark theme that&apos;s both aesthetic and accessible. 
                Tips for color selection, contrast, and consistency.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">Design</span>
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">CSS</span>
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] rounded">UI/UX</span>
              </div>
            </article>
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
