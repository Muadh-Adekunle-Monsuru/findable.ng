export default function NewNav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-emerald-50/40  backdrop-blur-xl ">
      <div className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto font-plus-jakarta-sans tracking-tight">
        <div className="text-2xl font-black tracking-tighter text-zinc-900 select-none">
          FINDABLE<span className="text-primary">.NG</span>
        </div>
        <div className="hidden  gap-8 items-center">
          <a
            className="text-emerald-700  font-bold border-b-2 border-emerald-600 pb-1"
            href="#"
          >
            Benefits
          </a>
          <a
            className="text-zinc-600  hover:text-emerald-700  transition-colors"
            href="#"
          >
            How it Works
          </a>
          <a
            className="text-zinc-600  hover:text-emerald-700  transition-colors"
            href="#"
          >
            Pricing
          </a>
          <a
            className="text-zinc-600  hover:text-emerald-700  transition-colors"
            href="#"
          >
            SEO Tips
          </a>
          <a
            className="text-zinc-600  hover:text-emerald-700  transition-colors"
            href="#"
          >
            Case Studies
          </a>
        </div>
        <a
          href="#pricing"
          className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold scale-95 active:scale-90 transition-transform hover:bg-primary-container"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
