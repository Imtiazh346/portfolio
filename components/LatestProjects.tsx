"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Project-card images live on a different Webflow bucket than the logos. */
const CDN = "https://cdn.prod.website-files.com/61dd9ddd76c6a0f7537a4c75/";

const PROJECTS = [
  {
    title: "VHS Entertainment",
    subtitle: "Direction artistique et refonte du site sur Webflow",
    img: "65d3937e284e0238a6c774b4_Card%20-%20VHS%20Entertainment.webp",
  },
  {
    title: "Alexis Le Rossignol",
    subtitle: "Conception d'un site Webflow pour le célèbre humoriste",
    img: "645a77eed4bf421824a5ab23_Card%20-%20ALR.webp",
  },
  {
    title: "Kolecto",
    subtitle:
      "Conception d'un site Webflow pour une startup du groupe Crédit Agricole",
    img: "65dde5465fc2146bc3c858dc_Card%20-%20Kolecto.webp",
  },
  {
    title: "Musilac",
    subtitle:
      "Conception du site de l'un des plus grands festivals musicaux de France",
    img: "626b07eefb5f8babbbc1e275_Card%20-%20Musilac.jpg",
  },
  {
    title: "Zeb",
    subtitle:
      "Conception d'un site e-commerce de haute qualité pour un photographe de nature",
    img: "645b612ce21090b39269c23d_Card%20-%20Zeb.webp",
  },
  {
    title: "One More Joke",
    subtitle:
      "Création d'un site et de 10 affiches pour 10 soirées de stand-up dans des lieux insolites",
    img: "645b5f553eff5d1c13804714_Card%20-%20One%20More%20Joke.webp",
  },
  {
    title: "Frédéric Bau",
    subtitle:
      "Création d'un site e-commerce pour l'un des plus grands chefs pâtissiers au Monde",
    img: "626b08052b714cb836ea9889_Card%20-%20Frederic%20Bau.jpg",
  },
];

export default function LatestProjects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    syncArrows();
    window.addEventListener("resize", syncArrows);
    return () => window.removeEventListener("resize", syncArrows);
  }, [syncArrows]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".project__card");
    const gap = 24;
    const amount = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    drag.current = {
      down: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: false,
    };
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
    <section className="section is--projects">
      <div className="projects__head">
        <h2 className="projects__title">Derniers projets</h2>
        <div className="projects__nav" role="group" aria-label="Navigation des projets">
          <button
            type="button"
            className="projects__arrow"
            aria-label="Projet précédent"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            className="projects__arrow"
            aria-label="Projet suivant"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="projects__track"
        onScroll={syncArrows}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            href="#"
            className="project__card"
            draggable={false}
            onClick={(e) => {
              e.preventDefault();
              if (drag.current.moved) e.stopPropagation();
            }}
          >
            <img
              src={`${CDN}${project.img}`}
              alt={project.title}
              className="project__img"
              loading="lazy"
              draggable={false}
            />
            <div className="project__overlay">
              <h3 className="project__name">{project.title}</h3>
              <p className="project__desc">{project.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
