"use client";

import { useState } from "react";

const CDN = "https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/";

/**
 * Testimonials shown in the fanned card slider (bazil.fr/design).
 * Portraits + names are taken from the live site. The quote copy is rendered
 * from Webflow's CMS and is NOT in the page source, so only Laura Domenge's
 * quote (visible in the reference screenshot) is verbatim — replace the
 * remaining `quote` strings with your real testimonials.
 */
const TESTIMONIALS = [
  {
    name: "Laura Domenge",
    role: "Humoriste",
    img: "6450ca577bf5df4e872fb593_Laura%20Domenge.webp",
    alt: "Témoignage de Laura Domenge, comédienne",
    quote:
      "Une esthétique poussée, une gentillesse dingue et une vitesse de production folle : je recommande vivement Bazil !",
  },
  {
    name: "Sacha Conkic",
    role: "Comédien",
    img: "6450ca5767b84922374d301b_Sacha%20Conkic.webp",
    alt: "Témoignage de Sacha Conkic",
    quote: "[Témoignage à compléter depuis votre CMS.]",
  },
  {
    name: "Yann Chatellier",
    role: "Entrepreneur",
    img: "6450ca585c1000f4cb6eed57_Yann%20Chatellier.webp",
    alt: "Témoignage de Yann Chatellier",
    quote: "[Témoignage à compléter depuis votre CMS.]",
  },
  {
    name: "Frédéric Bau",
    role: "Chef pâtissier",
    img: "6450ca588f7146106d3351b9_Fre%CC%81de%CC%81ric%20Bau.webp",
    alt: "Témoignage de Frédéric Bau",
    quote: "[Témoignage à compléter depuis votre CMS.]",
  },
];

/**
 * "Votre satisfaction avant tout" — fanned card carousel beside a text block
 * (replicates the .section.is--testimonials slider on bazil.fr/design). The
 * active card sits in front; the previous/next cards peek out left/right,
 * rotated and scaled down. Arrows rotate through the stack.
 */
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const n = TESTIMONIALS.length;

  const go = (dir: 1 | -1) => setActive((a) => (a + dir + n) % n);

  /** Position of a card relative to the active one → fan placement class. */
  const roleFor = (i: number) => {
    const rel = (i - active + n) % n;
    if (rel === 0) return "is--current";
    if (rel === 1) return "is--next";
    if (rel === n - 1) return "is--previous";
    return "is--hidden";
  };

  return (
    <section className="section is--testimonials">
      <div className="container skills__testimonials">
        <div className="testimonial__slider">
          <button
            type="button"
            className="slider__arrow left"
            aria-label="Témoignage précédent"
            onClick={() => go(-1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
              <path
                d="M15 5l-7 7 7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="slider__mask">
            {TESTIMONIALS.map((t, i) => (
              <figure key={t.name} className={`tcard ${roleFor(i)}`}>
                <img
                  src={`${CDN}${t.img}`}
                  alt={t.alt}
                  className="tcard__img"
                  loading="lazy"
                  draggable={false}
                />
                <figcaption className="tcard__body">
                  <p className="tcard__quote">{t.quote}</p>
                  <p className="tcard__author">
                    <span className="tcard__name">{t.name}</span>
                    <span className="tcard__role"> - {t.role}</span>
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            type="button"
            className="slider__arrow right"
            aria-label="Témoignage suivant"
            onClick={() => go(1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
              <path
                d="M9 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="about__list-text">
          <div className="heading_style-h5">TESTIMONIALS</div>
          <h3 className="skills__single--title">Built on collaboration.</h3>
          <p className="skills__single--text">
            I treat your project like my own business—delivering clean code,
            clear communication, and reliable timelines from start to finish.{" "}
            <span className="bold">
              Clients trust me for quick response times, ultra-fast performance,
              and high-converting layouts
            </span>{" "}
            built to grow your brand.
          </p>
        </div>
      </div>
    </section>
  );
}
