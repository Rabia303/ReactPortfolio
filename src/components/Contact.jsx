import { CONTACT } from "..";
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaKaggle, FaGithub, FaFileDownload, FaRegCopy, FaCheck } from "react-icons/fa";

const LINKS = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Rabia303" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rabia-imtiaz/" },
  { icon: FaKaggle, label: "Kaggle", href: "https://www.kaggle.com/rabiaaaimtiaz" },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
    } catch {
      // fallback for browsers without clipboard access
      const t = document.createElement("textarea");
      t.value = CONTACT.email;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 px-8 py-12 md:px-14">
        <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-96 -translate-y-1/2 rounded-full bg-purple-600/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 -top-20 h-48 w-72 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative flex flex-col items-center gap-10 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">Contact</p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">Let's build something</h2>
            <p className="text-neutral-400">
              Open to AI and full-stack roles, collaborations, and interesting problems. The fastest way to reach me is email.
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col items-center gap-4 md:w-auto md:items-end">
            {/* Primary actions side by side */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-6 py-3 font-medium text-white shadow-[0_0_30px_-6px_rgba(168,85,247,0.7)] transition hover:bg-purple-500"
              >
                <FaEnvelope /> Email me
              </a>
              <a
                href="/Rabia_Imtiaz_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 px-6 py-3 font-medium text-white transition hover:border-purple-500"
              >
                <FaFileDownload /> Download Resume
              </a>
            </div>

            {/* Email with copy button */}
            <button
              onClick={copyEmail}
              className="group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-neutral-400 transition hover:bg-neutral-800/60 hover:text-white"
              aria-label="Copy email address"
            >
              {CONTACT.email}
              <span className={`inline-flex items-center gap-1 text-xs ${copied ? "text-emerald-400" : "text-purple-400"}`}>
                {copied ? <><FaCheck /> Copied</> : <><FaRegCopy /> Copy</>}
              </span>
            </button>

            <div className="flex flex-wrap justify-center gap-3 md:justify-end">
              {LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2 rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-300 transition hover:border-purple-500 hover:text-white"
                >
                  <Icon className="text-lg" /> {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-12 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} Rabia Imtiaz
      </p>
    </div>
  );
};

export default Contact;
