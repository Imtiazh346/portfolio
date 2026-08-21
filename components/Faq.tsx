"use client";

import { useState } from "react";

type Item = { q: string; a: React.ReactNode; hidden?: boolean };

/**
 * FAQ content from bazil.fr/design. The first item ("tarif") carries the live
 * site's `hide` flag, so only the remaining four render — matching the design.
 */
const ITEMS: Item[] = [
  {
    hidden: true,
    q: "How long does it take to build a website ?",
    a: (
      <>
        {/* <p>Tout dépend du périmètre du projet.</p> */}
        <p>
          Standard landing pages typically take 1–2 weeks, while complex multi-page web applications or eCommerce storefronts take 3–5 weeks depending on requirements.
        </p>
      </>
    ),
  },
  {
    q: "How long does it take to build a website ?",
    a: (
      <>
        <p>
          Standard landing pages typically take 1–2 weeks, while complex multi-page web applications or eCommerce storefronts take 3–5 weeks depending on requirements.
        </p>
      </>
    ),
  },
  {
    q: "Do you provide custom design modifications ?",
    a: (
      <p>
        I specialize in turning custom design wireframes into pixel-perfect components, avoiding bulky, bloated templates to keep your site lightweight and agile.
      </p>
    ),
  },
  {
    q: "Can you optimize my existing store for conversions ?",
    a: (
      <>
        <p>
          Absolutely. I run deep conversion rate optimization (CRO) audits to fix mobile layout bottlenecks, improve CTA placements, and accelerate checkout flows.
        </p>
      </>
    ),
  },
  {
    q: "Which platform is right for your project ?",
    a: (
      <p className="flex flex-col">
        <p><strong>Next.js / React:</strong> Choose this for custom web apps and lightweight landing pages where instant speed, security, and unique UI/UX are critical for conversions.</p>
        <p><strong>Shopify:</strong> Choose this for pure eCommerce stores that need reliable payment gateways and native inventory tools ready to go out of the box.</p>
        <p><strong>WordPress:</strong> Choose this for content-driven websites or blogs where your marketing team needs to easily update text and images without touching code.</p>
      </p>
    ),
  },
];

/**
 * FAQ accordion (replicates the .faq__wrapper block on bazil.fr/design).
 * Each row toggles its answer open; the circular arrow rotates from a
 * right-arrow (closed) to an up-arrow (open).
 */
export default function Faq() {
  const visible = ITEMS.filter((it) => !it.hidden);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section is--faq">
      <div className="faq__wrapper">
        {visible.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className={`faq__single ${isOpen ? "is--open" : ""}`}>
              <button
                type="button"
                className="faq__question"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="question">{item.q}</span>
                <span className="faq__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path
                      d="M9 5l7 7-7 7"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <div className="faq__answer-wrap">
                <div className="faq__answer">{item.a}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
