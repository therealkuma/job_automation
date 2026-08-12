/*
  Komi Signal design reminder: dark AI-native product aesthetic; near-black navy canvas;
  cyan-to-indigo gradient accents; rounded glass surfaces; Space Grotesk + Noto Sans TC;
  use calm, direct Traditional Chinese copy and make mission, people, and workflow feel tangible.
*/

import { useEffect } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  Hexagon,
  HeartHandshake,
  Play,
  Sparkles,
} from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1mQgCIgTMJES9KramdCP1bYtlKo4N_v8RUpbxE0Eg2H4/viewform";

export default function About() {
  useEffect(() => {
    document.title = "About — KOMI AI";
    return () => {
      document.title = "讓AI幫你找工作";
    };
  }, []);

  return (
    <main className="komi-site about-page">
      <div className="ambient-field" aria-hidden="true" />

      <header className="site-nav container">
        <a className="brand" href="/" aria-label="KOMI AI 首頁">
          <span className="brand-mark" aria-hidden="true"><Hexagon size={21} strokeWidth={2.5} /></span>
          <span className="brand-wordmark"><span className="brand-wordmark-main">KOMI</span><span className="brand-wordmark-accent">AI</span></span>
        </a>

        <nav className="nav-links" aria-label="主要導覽">
          <a href="/#how-it-works">運作方式</a>
          <a href="/#application">開始申請</a>
          <a className="nav-current" href="/about" aria-current="page">ABOUT</a>
        </nav>

        <a className="nav-action" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
          立即開始 <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
        </a>
      </header>

      <section className="about-hero container">
        <div className="about-hero-copy">
          <div className="eyebrow"><Sparkles size={14} strokeWidth={2} aria-hidden="true" /> 關於 KOMI AI</div>
          <h1>讓機會，<br /><span>更靠近每一個人。</span></h1>
          <p className="about-lede">
            KOMI AI 是一個以非營利為導向的專案，希望把 AI 帶來的效率，轉化成更多人都能使用的求職支持，讓尋找工作的過程少一點重複，多一點可能。
          </p>
          <div className="about-signal-line"><span className="pulse-dot" /> MISSION / OPEN ACCESS / HUMAN FIRST</div>
        </div>

        <div className="mission-signal" aria-label="KOMI AI 非營利使命視覺示意">
          <div className="mission-grid" aria-hidden="true" />
          <div className="mission-glow" aria-hidden="true" />
          <div className="mission-core"><HeartHandshake size={42} strokeWidth={1.35} /></div>
          <div className="mission-orbit orbit-a" aria-hidden="true" />
          <div className="mission-orbit orbit-b" aria-hidden="true" />
          <div className="mission-node node-a" aria-hidden="true"><Check size={14} strokeWidth={2.3} /></div>
          <div className="mission-node node-b" aria-hidden="true"><Bot size={14} strokeWidth={1.8} /></div>
          <div className="mission-label mission-label-top"><span className="pulse-dot" /> PURPOSE</div>
          <div className="mission-label mission-label-bottom">AI / PEOPLE / OPPORTUNITY</div>
        </div>
      </section>

      <section className="mission-section container">
        <div className="section-heading about-heading">
          <div className="eyebrow"><span className="eyebrow-line" /> 我們相信</div>
          <h2>工具可以更聰明，<br /><span>機會也可以更公平。</span></h2>
          <p>我們不把 AI 當成距離人更遠的技術，而是把它變成一個能替你整理資訊、減少負擔、留住時間的助手。</p>
        </div>

        <div className="mission-points">
          <article className="mission-point">
            <span className="mission-point-number">01</span>
            <h3>把時間還給人</h3>
            <p>將重複的職位整理與申請準備交給自動化，讓你把精力放回自己的選擇與成長。</p>
          </article>
          <article className="mission-point">
            <span className="mission-point-number">02</span>
            <h3>降低開始的門檻</h3>
            <p>從一份履歷開始，不要求複雜設定，讓正在尋找下一個機會的人可以更容易踏出第一步。</p>
          </article>
          <article className="mission-point">
            <span className="mission-point-number">03</span>
            <h3>保持透明與尊重</h3>
            <p>清楚說明流程與通知，尊重每一份資料，也讓你知道自動化正在為你做什麼。</p>
          </article>
        </div>
      </section>

      <section className="founder-section container">
        <div className="founder-card">
          <div className="founder-avatar" aria-hidden="true">KL</div>
          <div className="founder-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> 創辦人</div>
            <h2>Kuma Lin</h2>
            <p className="founder-role">Accountant · CPA </p>
            <p>
              Kuma Lin 是一位具 Accountant 與 CPA 專業背景的創辦人，正在從會計與財務領域轉向 AI。一路走來，他看見許多人有能力、有經驗，卻被求職過程中大量重複的工作消耗；因此，他想把自己正在學習的 AI 能力，做成一個真正能幫上忙的工具，讓更多人有機會更快找到適合自己的工作。
            </p>
          </div>
          <div className="founder-status"><span className="pulse-dot" /> BUILDING FOR PEOPLE</div>
        </div>
      </section>

      <section className="video-section container">
        <div className="video-intro">
          <div className="eyebrow"><span className="eyebrow-line" /> 接下來看看</div>
          <h2>AI 如何陪你，<br /><span>走完求職流程。</span></h2>
          <p>影片即將上線，將示範從履歷輸入、機會整理到申請摘要的完整自動化流程。</p>
        </div>

        <div className="video-placeholder" role="img" aria-label="YouTube 自動化流程示範影片預留位置">
          <div className="video-placeholder-grid" aria-hidden="true" />
          <div className="video-play"><Play size={27} fill="currentColor" strokeWidth={1.5} aria-hidden="true" /></div>
          <div className="video-meta"><span>YOUTUBE / WALKTHROUGH</span><span>COMING SOON</span></div>
          <strong>自動化流程示範</strong>
          <small>影片上線後，點擊此處觀看完整說明</small>
        </div>
      </section>

      <section className="about-cta container">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" /> 現在開始</div>
          <h2>下一個機會，<span>從一份資料開始。</span></h2>
        </div>
        <a className="gradient-button" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
          開始填寫申請資料 <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
        </a>
      </section>

      <footer className="site-footer container">
        <a className="brand footer-brand" href="/" aria-label="KOMI AI 回到首頁">
          <span className="brand-mark small" aria-hidden="true"><Hexagon size={17} strokeWidth={2.5} /></span>
          <span className="brand-wordmark"><span className="brand-wordmark-main">KOMI</span><span className="brand-wordmark-accent">AI</span></span>
        </a>
        <p>讓 AI 接手重複的事，讓你專注下一個機會。</p>
        <a className="footer-link" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">開始申請 <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
