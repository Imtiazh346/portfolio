"use client";

import { useEffect, useRef } from "react";

const CDN = "https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/";

/** The 12 gallery photos, keyed by their bazil.fr number → full filename. */
const PHOTO: Record<string, string> = {
  "01": "6450c9268f714607b0334902_Photo%20-%20gallerie%20-%2001.webp",
  "02": "6450c928a23597ab195baa5d_Photo%20-%20gallerie%20-%2002.webp",
  "03": "6450c92767d57640ecc8cc2f_Photo%20-%20gallerie%20-%2003.webp",
  "04": "6450c927cc93b42fcd9a8be7_Photo%20-%20gallerie%20-%2004.webp",
  "05": "6450c9275193ea73159be0be_Photo%20-%20gallerie%20-%2005.webp",
  "06": "6450c927cc93b417ff9a8bec_Photo%20-%20gallerie%20-%2006.webp",
  "07": "6450c92751a4505843f46386_Photo%20-%20gallerie%20-%2007.webp",
  "08": "6450c927c8f1596383b0bbb9_Photo%20-%20gallerie%20-%2008.webp",
  "09": "6450c927cc93b407379a8bed_Photo%20-%20gallerie%20-%2009.webp",
  "10": "6450c927b73420062c80d6ed_Photo%20-%20gallerie%20-%2010.webp",
  "11": "6450c9277bf5df598f2fa7c6_Photo%20-%20gallerie%20-%2011.webp",
  "12": "6450c927465b2bd05712570b_Photo%20-%20gallerie%20-%2012.webp",
};

/** Four columns, exactly as ordered on the live site (even cols shifted up). */
const COLUMNS = [
  { key: "one", parity: "is--odd", photos: ["01", "05", "09"] },
  { key: "tow", parity: "is--even", photos: ["02", "06", "10"] },
  { key: "three", parity: "is--odd", photos: ["07", "03", "11"] },
  { key: "four", parity: "is--even", photos: ["04", "08", "12"] },
];

/**
 * "Photographie" teaser (replicates the .section.is--photos block on
 * bazil.fr/design): a black, full-height section with a centered overlay
 * heading + CTA over a hard-light dark filter, on top of a 4-column photo
 * grid. The columns drift vertically as the section scrolls through the
 * viewport — odd columns rise, even columns fall — recreating the Webflow
 * continuous scroll interaction.
 */
export default function PhotosSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    if (!section || !wrapper) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const columns = Array.from(
      wrapper.querySelectorAll<HTMLElement>(".photos-bg__column"),
    );
    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // 0 when the section's top reaches the viewport bottom, 1 when its
      // bottom reaches the viewport top. Centre of travel ≈ 0.5.
      const progress = (vh - rect.top) / (vh + rect.height);
      const shift = (progress - 0.5) * 2; // -1 … 1
      const amp = 90; // px of drift at the extremes

      for (const col of columns) {
        const even = col.classList.contains("is--even");
        const y = even ? shift * amp : -shift * amp;
        col.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="section is--photos">
      <div className="galerie__text">
        <div className="heading_style-h5">WHAT I DO</div>
        <h2 className="heading-md text-white">Your vision. Built perfectly.</h2>
        <p className="text-lg text-white is--photos">
          I turn custom designs into fast, clean interfaces using{" "}
          <span className="bold">Next.js</span> and{" "}
          <span className="bold">Tailwind CSS</span>. Built to load instantly,
          look flawless on mobile, and{" "}
          <span className="bold">convert visitors into customers.</span>
        </p>
        <a href="/photos" className="cta is--ghost white w-button">
          See My Work
        </a>
      </div>

      <a
        href="/photos"
        className="photos__link"
        aria-label="Découvrez mes photos"
      >
        <div className="filter" />
        <div ref={wrapperRef} className="photos-bg__wrapper">
          {COLUMNS.map((col) => (
            <div
              key={col.key}
              className={`photos-bg__column ${col.key} ${col.parity}`}
            >
              {col.photos.map((n) => (
                <img
                  key={n}
                  src={`${CDN}${PHOTO[n]}`}
                  alt=""
                  className="photos-bg__single"
                  loading="lazy"
                  draggable={false}
                />
              ))}
            </div>
          ))}
        </div>
      </a>
    </section>
  );
}
