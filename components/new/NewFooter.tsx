export default function NewFooter() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 w-full border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-6 font-inter text-sm tracking-wide">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-xl font-bold text-zinc-900 dark:text-zinc-50">FINDABLE.NG</div>
          <p className="text-zinc-500 dark:text-zinc-400 text-center md:text-left max-w-xs">© 2024 FINDABLE.NG. The Curated Authority in Nigerian SEO.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#">Privacy Policy</a>
          <a className="text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#">Terms of Service</a>
          <a className="text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" href="#">Contact Support</a>
        </div>
        <div className="bg-primary-fixed text-on-primary-fixed px-4 py-2 rounded-lg font-bold flex items-center gap-2">
          <span className="material-symbols-outlined text-lg" data-icon="verified" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          Verified Nigerian Business
        </div>
      </div>
    </footer>
  );
}
