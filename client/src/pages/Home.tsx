/*
  Paper Trail design reminder: contemporary editorial minimalism; warm paper background;
  graphite ink; vermilion note accent; left reading rail plus offset application card;
  DM Serif Display + DM Sans; hairline borders and restrained motion; no dashboard chrome.
*/

import { ArrowDown, ArrowUpRight, Check, Clock3, FileText, LockKeyhole, Mail, Upload, UserRound } from "lucide-react";
import { useState } from "react";

// Replace this value with the published Google Form URL. The page keeps the setup state
// explicit instead of pretending to submit resume files somewhere before the form exists.
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/viewform";
const formConfigured = !GOOGLE_FORM_URL.includes("REPLACE_WITH_YOUR_FORM_ID");

const fieldPreview = [
  { number: "01", label: "Name", detail: "Short answer", icon: UserRound },
  { number: "02", label: "Email", detail: "Email address", icon: Mail },
  { number: "03", label: "Position desired", detail: "Short answer", icon: FileText },
  { number: "04", label: "Resume", detail: "PDF or DOCX upload", icon: Upload },
];

export default function Home() {
  const [showSetupNote, setShowSetupNote] = useState(false);

  function handleFormClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!formConfigured) {
      event.preventDefault();
      setShowSetupNote(true);
    }
  }

  return (
    <main className="site-shell">
      <div className="grain-layer" aria-hidden="true" />

      <header className="topbar container">
        <a className="brand" href="#top" aria-label="Apply — home">
          <span className="brand-mark" aria-hidden="true">
            <img src="/manus-storage/apply-mark_ed25a050.png" alt="" />
          </span>
          <span className="brand-wordmark">Apply<span> / Careers</span></span>
        </a>

        <div className="topbar-meta" aria-label="Application status">
          <span className="status-dot" aria-hidden="true" />
          <span>Now accepting</span>
          <span className="meta-divider" aria-hidden="true" />
          <span>2–3 min</span>
        </div>
      </header>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-rule" />01 / APPLICATION</p>
          <h1>Bring your<br /><em>point of view.</em></h1>
          <p className="hero-lede">
            We’re looking for thoughtful people who care about the details, ask better questions,
            and make room for what comes next.
          </p>
          <a className="quiet-link" href="#application">
            <span>See what you’ll need</span>
            <ArrowDown size={16} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>

        <div className="hero-art" aria-label="Editorial paper composition">
          <img className="hero-image" src="/manus-storage/apply-paper-hero_840fb2e5.png" alt="Warm paper with a folded corner and a vermilion registration mark" />
          <div className="hero-caption">
            <span className="caption-index">A / 01</span>
            <span>make room for the next idea</span>
          </div>
          <img className="hero-motif" src="/manus-storage/apply-line-motif_8221e769.png" alt="" aria-hidden="true" />
        </div>
      </section>

      <section id="application" className="application-section container">
        <div className="guide-column">
          <p className="eyebrow"><span className="eyebrow-rule" />WHAT TO PREPARE</p>
          <h2>One clear step<br /><em>to begin.</em></h2>
          <p className="guide-copy">
            The application lives in Google Forms so your answers and resume arrive together,
            in one place. Have the following ready before you start.
          </p>

          <div className="field-preview" aria-label="Google Form fields">
            {fieldPreview.map(({ number, label, detail, icon: Icon }) => (
              <div className="field-row" key={label}>
                <span className="field-number">{number}</span>
                <span className="field-icon"><Icon size={15} strokeWidth={1.5} aria-hidden="true" /></span>
                <span className="field-copy">
                  <strong>{label}</strong>
                  <small>{detail}</small>
                </span>
                <Check className="field-check" size={15} strokeWidth={1.5} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

        <aside className="application-card" aria-labelledby="form-title">
          <div className="card-header">
            <span className="card-kicker">APPLICATION / 01</span>
            <span className="card-time"><Clock3 size={14} strokeWidth={1.5} aria-hidden="true" /> 2–3 minutes</span>
          </div>
          <div className="card-accent" aria-hidden="true" />
          <h3 id="form-title">Complete the<br /><em>Google Form.</em></h3>
          <p className="card-copy">
            A short form. A clear next step. Your resume upload is included inside the form,
            so you can send everything in one pass.
          </p>

          <a
            className="primary-action"
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noreferrer"
            onClick={handleFormClick}
          >
            <span>Open application form</span>
            <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
          </a>

          <p className="card-note">
            <LockKeyhole size={14} strokeWidth={1.5} aria-hidden="true" />
            Resume uploads may require a Google sign-in, depending on the form’s settings.
          </p>

          {showSetupNote && (
            <div className="setup-note" role="alert">
              <strong>One small setup step:</strong> replace the placeholder Google Form URL in
              <code>Home.tsx</code> with your published form link, then this button will open it in a new tab.
            </div>
          )}
        </aside>
      </section>

      <section className="detail-section container">
        <div className="detail-image-wrap">
          <img src="/manus-storage/apply-paper-detail_e6d81b2d.png" alt="A single application sheet on warm paper" />
          <span className="detail-stamp">READY WHEN<br />YOU ARE</span>
        </div>
        <div className="detail-copy">
          <p className="eyebrow"><span className="eyebrow-rule" />A NOTE BEFORE YOU START</p>
          <p className="detail-quote">“The strongest applications make it easy to see how someone thinks.”</p>
          <p className="detail-body">
            Don’t over-polish the story. Tell us what you notice, what you’ve made, and where you
            want to grow. We read every application with care.
          </p>
          <span className="detail-signoff">— The team</span>
        </div>
      </section>

      <footer className="footer container">
        <span>Apply / Careers</span>
        <span>Made for the next good idea.</span>
        <a href="#top">Back to top <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
