import { useEffect, useRef, useState } from "react";
import "./App.css";

const ALUMNI = [
  { name: "Shourya Dwivedi", batch: 2020, amount: 2500 },
  { name: "Ravi Tiwari", batch: 2020, amount: 2000 },
  { name: "Soumodeep Mandal", batch: 2021, amount: 1000 },
  { name: "Harsh Vardhan Dubey", batch: 2023, amount: 2000 },
  { name: "Arun Kumar Nayak", batch: 2023, amount: 10000 },
  { name: "Abhinav Khare", batch: 2023, amount: 5000 },
  { name: "Abhishek Kumar Roy", batch: 2023, amount: 500 },
  { name: "Ishan Gupta", batch: 2024, amount: 2000 },
  { name: "Ramashish Gupta", batch: 2024, amount: 2000 },
  { name: "Shiwani Kumari", batch: 2020, amount: 1000 },
  { name: "Indarpal Khuntey", batch: 2020, amount: 1500 },
  { name: "Abhishek Kumar", batch: 2017, amount: 5001 },
  { name: "Ankit Anuragi", batch: 2024, amount: 2000 },
  { name: "Ayan Banerjee", batch: 2022, amount: 500 }
];

function App() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const alumniRef = useRef(null);
  const footerRef = useRef(null);
  const [visible, setVisible] = useState({
    left: false,
    right: false,
    alumni: false,
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
    if (alumniRef.current) observer.observe(alumniRef.current);
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
            Metallurgical and Materials Engineering, IIT Kharagpur. Your
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
              <span className="qr-hint">10224333816@sbi</span>
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

      <section
        ref={alumniRef}
        data-section="alumni"
        className={`alumni-section ${visible.alumni ? "visible" : ""}`}
      >
        <h2 className="alumni-heading">
          Special thanks to our esteemed Alumni for contributing in{" "}
          <em>COMPOSIT 2026</em>
        </h2>
        <div className="alumni-grid">
          {[...ALUMNI]
            .sort((a, b) => b.amount - a.amount || a.batch - b.batch || a.name.localeCompare(b.name))
            .map((alum, i) => (
              <div className="alumni-card" key={i} style={{ animationDelay: `${i * 0.07}s` }}>
                <span className="alumni-name">{alum.name}</span>
                <span className="alumni-batch">Batch of {alum.batch}</span>
              </div>
            ))}
        </div>
      </section>

      <footer
        ref={footerRef}
        data-section="footer"
        className={`footer ${visible.footer ? "visible" : ""}`}
      >
        {/* <p className="footer-note">
          Your contributions will be shown on the official COMPOSIT website.
        </p> */}
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
