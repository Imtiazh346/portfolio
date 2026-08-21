"use client";

import { useRef } from "react";

const CDN = "https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/";

/**
 * The hero "webpages" carousel from bazil.fr/design — a draggable row of
 * project mockups, staggered into a shallow arc (edge cards high, centre card
 * pushed lowest), bleeding off the bottom edge of the section.
 * `step` mirrors the live `.is--1`…`.is--4` vertical offsets (0 → 4 → 0).
 */
const WEBPAGES = [
  { src: "65d3631eefc29b915264e8f4_Webdesign%20-%2001.webp", step: 1 },
  { src: "65d36262efc29b9152646ff6_Webdesign%20-%2002.webp", step: 2 },
  { src: "65d3626233ad01505949ebc1_Webdesign%20-%2003.webp", step: 3 },
  { src: "65d36262e8cd2028b4a438d0_Webdesign%20-%2004.webp", step: 4 },
  { src: "65d362626f9bd5ce1a106e32_Webdesign%20-%2005.webp", step: 3 },
  { src: "65d36262df37a428778cf738_Webdesign%20-%2006.webp", step: 2 },
  { src: "65d3626231059e94e2fa5e0a_Webdesign%20-%2001.webp", step: 1 },
];

export default function Showcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !drag.current.down) return;
    const delta = e.clientX - drag.current.startX;
    if (Math.abs(delta) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    drag.current.down = false;
    if (el) el.releasePointerCapture?.(e.pointerId);
  };

  return (
    <section className="section is--webpages">
      <div
        ref={trackRef}
        className="hero__webpages"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div className="webpages__wrapper">
          {WEBPAGES.map((page, i) => (
            <div key={i} className={`webpages__container is--${page.step}`}>
              <a
                href="#"
                className="webpages__lightbox"
                onClick={(e) => {
                  e.preventDefault();
                  if (drag.current.moved) e.stopPropagation();
                }}
                draggable={false}
              >
                <img
                  src={`${CDN}${page.src}`}
                  loading="lazy"
                  alt=""
                  className="webpages__img"
                  draggable={false}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
