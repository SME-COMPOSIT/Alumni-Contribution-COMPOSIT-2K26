import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const footerRef = useRef(null);
  const [visible, setVisible] = useState({
    left: false,
    right: false,
    footer: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((v) => ({ ...v, [entry.target.dataset.section]: true }));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <div className="hero-bg" aria-hidden="true" />
      <main className="main">
        <section
          ref={leftRef}
          data-section="left"
          className={`content-left ${visible.left ? "visible" : ""}`}
        >
          <span className="badge">Alumni Contribution</span>
          <h1 className="title">
            Take COMPOSIT
            <br />
            <em>one step ahead.</em>
          </h1>
          <p className="lead">
            COMPOSIT is the annual technical fest of the Department of
            Metallurgy and Materials Engineering, IIT Kharagpur. Your
            contribution helps us make it bigger and better.
          </p>
          <p className="body">
            We are reaching out to our departmental alumni. Your support—whether
            for events, infrastructure, or prizes—directly helps the current
            batch carry the COMPOSIT legacy forward. Every contribution counts.
          </p>
          <div className="stats">
            <div className="stat">
              <span className="stat-value">MME</span>
              <span className="stat-label">IIT Kharagpur</span>
            </div>
            <div className="stat">
              <span className="stat-value">COMPOSIT</span>
              <span className="stat-label">Dept. Fest</span>
            </div>
          </div>
        </section>

        <section
          ref={rightRef}
          data-section="right"
          className={`content-right ${visible.right ? "visible" : ""}`}
        >
          <div className="card">
            <h2 className="card-title">Contribute now</h2>
            <p className="card-subtitle">
              Scan to pay (UPI) or use bank details below
            </p>
            <div className="qr-section">
              <span className="qr-label">Scan to pay</span>
              <div className="qr-wrap">
                <img
                  src="/composit-sbi-qr.jpeg"
                  alt="Scan QR to contribute to COMPOSIT"
                  className="qr-img"
                />
              </div>
              <span className="qr-hint">UPI / any payment app</span>
            </div>
            <div className="bank-details">
              <h3>Bank details</h3>
              <dl>
                <div>
                  <dt>Account name</dt>
                  <dd>COMP-O-SIT</dd>
                </div>
                <div>
                  <dt>Beneficiary</dt>
                  <dd>COMPOSIT</dd>
                </div>
                <div>
                  <dt>Account number</dt>
                  <dd className="mono">10224333816</dd>
                </div>
                <div>
                  <dt>IFSC</dt>
                  <dd className="mono">SBIN0000202</dd>
                </div>
                <div>
                  <dt>Branch</dt>
                  <dd>Kharagpur, West Bengal, India</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer
        ref={footerRef}
        data-section="footer"
        className={`footer ${visible.footer ? "visible" : ""}`}
      >
        <p className="footer-note">
          Your contributions will be shown on the official COMPOSIT website.
        </p>
        <div className="footer-inner">
          <a
            href="https://composit.in"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Know more — composit.in
          </a>
          <span className="footer-sep">·</span>
          <a
            href="https://composit.in/our-team"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Meet the team — composit.in/our-team
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
