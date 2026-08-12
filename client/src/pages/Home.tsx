/*
  Komi Signal design reminder: dark AI-native product aesthetic; near-black navy canvas;
  cyan-to-indigo gradient accents; rounded glass surfaces; Space Grotesk + Noto Sans TC;
  asymmetrical hero with an orbital agent visual; calm, direct Traditional Chinese copy.
*/

import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Check,
  Clock3,
  FileText,
  Hexagon,
  Mail,
  ShieldCheck,
  Sparkles,
  Upload,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1mQgCIgTMJES9KramdCP1bYtlKo4N_v8RUpbxE0Eg2H4/viewform";

const formPreview: { number: string; label: string; detail: string; icon: LucideIcon }[] = [
  { number: "01", label: "姓名", detail: "怎麼稱呼你", icon: UserRound },
  { number: "02", label: "Email", detail: "接收進度通知", icon: Mail },
  { number: "03", label: "期望職位", detail: "想尋找的工作方向", icon: BriefcaseBusiness },
  { number: "04", label: "履歷", detail: "上傳 PDF 或 DOCX", icon: Upload },
];

const workflow = [
  { number: "01", status: "資料節點", title: "填寫資料", text: "留下基本資料與你想找的職位方向。" },
  { number: "02", status: "AI 讀取中", title: "上傳履歷", text: "讓 AI 讀懂你的經驗，開始整理適合的機會。" },
  { number: "03", status: "即將啟動", title: "等待通知", text: "我們會在 3 個工作天內啟動自動化流程。" },
];

export default function Home() {
  return (
    <main className="komi-site">
      <div className="ambient-field" aria-hidden="true" />

      <header className="site-nav container">
        <a className="brand" href="#top" aria-label="KOMI AI 首頁">
          <span className="brand-mark" aria-hidden="true">
            <Hexagon size={21} strokeWidth={2.5} />
          </span>
          <span className="brand-wordmark"><span className="brand-wordmark-main">KOMI</span><span className="brand-wordmark-accent">AI</span></span>
        </a>

        <nav className="nav-links" aria-label="主要導覽">
          <a href="#how-it-works">運作方式</a>
          <a href="#application">開始申請</a>
          <a href="https://www.komi-ai.com" target="_blank" rel="noreferrer">KOMI AI</a>
        </nav>

        <a className="nav-action" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
          立即開始 <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
        </a>
      </header>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14} strokeWidth={2} aria-hidden="true" /> KOMI AI 求職自動化</div>
          <h1>讓<span>AI</span>幫你找工作</h1>
          <p className="hero-lede">
            把找工作的繁瑣流程交給 AI。從你的履歷出發，整理機會、加速申請，讓你把時間留給真正重要的準備。
          </p>
          <div className="hero-actions">
            <a className="gradient-button" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
              填寫申請資料 <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
            </a>
            <a className="text-button" href="#how-it-works">了解流程 <ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" /></a>
          </div>
          <div className="trust-line"><ShieldCheck size={15} strokeWidth={1.8} aria-hidden="true" /> 資料只用於建立你的求職自動化</div>
        </div>

        <div className="hero-art" aria-label="AI 求職自動化視覺示意">
          <div className="hero-art-grid" aria-hidden="true" />
          <div className="orbital-stage" aria-hidden="true">
            <div className="orbital-ring ring-one" />
            <div className="orbital-ring ring-two" />
            <div className="orbital-ring ring-three" />
            <div className="orbital-core"><Bot size={44} strokeWidth={1.35} /></div>
            <div className="orbit-dot dot-one" />
            <div className="orbit-dot dot-two" />
          </div>
          <div className="agent-card agent-card-top">
            <span className="agent-status"><span className="pulse-dot" /> AI 正在整理</span>
            <strong>職位匹配中</strong>
            <small>依照你的經驗與方向</small>
          </div>
          <div className="agent-card agent-card-bottom">
            <span className="card-icon"><Check size={15} strokeWidth={2.4} /></span>
            <div><strong>自動化已準備</strong><small>下一步：完成申請資料</small></div>
          </div>
          <span className="art-label label-left">AI / 求職</span>
          <span className="art-label label-right">01 — 03</span>
        </div>
      </section>

      <section className="hero-stats container" aria-label="服務資訊">
        <div><strong>2–3 分鐘</strong><span>完成資料填寫</span></div>
        <div><strong>3 個工作天</strong><span>啟動你的自動化</span></div>
        <div><strong>一份摘要</strong><span>掌握後續申請進度</span></div>
      </section>

      <section id="how-it-works" className="workflow-section container">
        <div className="section-heading">
          <div className="eyebrow"><span className="eyebrow-line" /> 運作方式</div>
          <h2>從一份履歷，<br /><span>開始新的可能。</span></h2>
          <p>不需要複雜設定。留下資料，讓我們把下一步安排好。</p>
        </div>
        <div className="workflow-grid">
          {workflow.map((step) => (
            <article className="workflow-card" key={step.number}>
              <div className="workflow-topline"><span className="workflow-number">{step.number}</span><span className="workflow-status"><span /> {step.status}</span></div>
              <div className="workflow-track" aria-hidden="true"><span className="workflow-node" /><span className="workflow-line" /></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <ArrowRight className="workflow-arrow" size={17} strokeWidth={1.7} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section id="application" className="application-section container">
        <div className="application-intro">
          <div className="eyebrow"><span className="eyebrow-line" /> 申請資料</div>
          <h2>準備好，<br /><span>就從這裡開始。</span></h2>
          <p>Google Form 會收集以下資料，送出後我們會寄信確認，並在 3 個工作天內為你啟動流程。</p>
          <div className="mini-note"><Clock3 size={16} strokeWidth={1.8} aria-hidden="true" /><span>整份表單約需 2–3 分鐘</span></div>
        </div>

        <div className="application-panel">
          <div className="panel-topline"><span>申請流程 / 01</span><span className="live-pill"><span /> 運行中</span></div>
          <h3>啟動你的求職流程</h3>
          <p className="panel-intro">把資料交給 AI，讓下一步正式開始。</p>
          <div className="form-preview" aria-label="申請表單欄位預覽">
            {formPreview.map(({ number, label, detail, icon: Icon }) => (
              <div className="form-preview-row" key={label}>
                <span className="preview-number">{number}</span>
                <span className="preview-icon"><Icon size={16} strokeWidth={1.7} aria-hidden="true" /></span>
                <span className="preview-label"><strong>{label}</strong><small>{detail}</small></span>
                <Check className="preview-check" size={15} strokeWidth={2.1} aria-hidden="true" />
              </div>
            ))}
          </div>
          <a className="gradient-button wide-button" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" style={{ fontSize: "16px" }}>
            開始填寫 Google 表單 <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
          </a>
          <p className="panel-footnote"><ShieldCheck size={14} strokeWidth={1.8} aria-hidden="true" /> 履歷上傳可能需要登入 Google 帳戶</p>
        </div>
      </section>

      <footer className="site-footer container">
        <a className="brand footer-brand" href="#top" aria-label="KOMI AI 回到頂端">
          <span className="brand-mark small" aria-hidden="true"><Hexagon size={17} strokeWidth={2.5} /></span>
          <span className="brand-wordmark"><span className="brand-wordmark-main">KOMI</span><span className="brand-wordmark-accent">AI</span></span>
        </a>
        <p>讓 AI 接手重複的事，讓你專注下一個機會。</p>
        <a className="footer-link" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">開始申請 <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
