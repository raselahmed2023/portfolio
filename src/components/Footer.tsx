import Link from "next/link";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-6 py-7">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="text-center sm:text-left">
            <Link
              href="/#home"
              className="mono-font inline-flex items-center gap-1 text-lg font-bold"
              aria-label="Go to home section"
            >
              <span className="text-primary">{"{"}</span>

              <span className="text-slate-900 dark:text-white">
                RA
              </span>

              <span className="text-secondary">{"}"}</span>
            </Link>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Frontend Developer | MERN Stack &amp; Full-Stack
              Enthusiast
            </p>
          </div>

          <div className="flex items-center gap-2">
            <FooterSocialLink
              href="https://github.com/raselahmed2023"
              label="GitHub"
              icon="code"
            />

            <FooterSocialLink
              href="https://www.linkedin.com/in/rasel-ahmed06/"
              label="LinkedIn"
              icon="work"
            />

            <FooterSocialLink
              href="https://leetcode.com/u/rasel_ahmed06/"
              label="LeetCode"
              icon="terminal"
            />

            <FooterSocialLink
              href="mailto:raselahmediu22@gmail.com"
              label="Email"
              icon="mail"
              external={false}
            />
          </div>
        </div>

        <div className="my-5 h-px bg-slate-200 dark:bg-slate-800" />

        <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-slate-500 dark:text-slate-400 sm:flex-row sm:text-left">
          <p>
            © {currentYear} Rasel Ahmed. All rights reserved.
          </p>

          <Link
            href="/#home"
            className="inline-flex items-center gap-1 font-semibold transition-colors hover:text-primary"
          >
            Back to top

            <span className="material-symbols-outlined text-base">
              arrow_upward
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

interface FooterSocialLinkProps {
  href: string;
  label: string;
  icon: string;
  external?: boolean;
}

const FooterSocialLink = ({
  href,
  label,
  icon,
  external = true,
}: FooterSocialLinkProps) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
    >
      <span className="material-symbols-outlined text-lg">
        {icon}
      </span>
    </a>
  );
};

export default Footer;