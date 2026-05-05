const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900/50 py-20 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mono-font text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-lg mx-auto">
          Focused on <span className="text-primary">Front-End Development</span>.<br/>
          Let's Connect and Bring Your Project To Life!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a className="bg-white dark:bg-slate-800 px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3 hover:border-primary hover:-translate-y-1 transition-all shadow-sm mono-font font-bold text-slate-900 dark:text-slate-100" href="#">
            <span className="material-symbols-outlined text-xl">mail</span> Email
          </a>
          <a className="bg-white dark:bg-slate-800 px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3 hover:border-primary hover:-translate-y-1 transition-all shadow-sm mono-font font-bold text-slate-900 dark:text-slate-100" href="#">
            <span className="material-symbols-outlined text-xl">link</span> LinkedIn
          </a>
          <a className="bg-white dark:bg-slate-800 px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3 hover:border-primary hover:-translate-y-1 transition-all shadow-sm mono-font font-bold text-slate-900 dark:text-slate-100" href="#">
            <span className="material-symbols-outlined text-xl">description</span> Resume
          </a>
        </div>
        <div className="text-slate-400 text-xs mono-font">
          Designed and Developed by <span className="text-primary">Alex Rosales</span>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
