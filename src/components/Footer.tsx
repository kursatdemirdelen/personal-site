export default function Footer() {
  return (
    <footer className="border-t border-[#333] py-8">
      <div className="max-w-5xl mx-auto px-6 text-center text-[#888] text-sm">
        <p>&copy; {new Date().getFullYear()} Kürşat Demirdelen. All rights reserved.</p>
      </div>
    </footer>
  );
}
