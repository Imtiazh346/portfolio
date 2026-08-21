"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "/design" },
  { label: "Work", href: "/photos" },
  { label: "About", href: "/look-book" },
];

const EMAIL_HREF = "mailto:imtiazh346@gmail.com";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav flex-split is--white">
      <a href="/" className="nav__logo" aria-label="Bazil — accueil">
        <img
          src="/imtiazlogo.png"
          alt="Imtiaz Hussain Logo"
          className="nav__logo-img"
        />
      </a>

      <div className="nav__menu">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="nav__link">
            {link.label}
          </a>
        ))}

        <a href={EMAIL_HREF} className="cta menu w-button">
          hello@imtiaz
        </a>
      </div>

      <button
        type="button"
        className={`menu__button${open ? " is--open" : ""}`}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </button>

      <div className={`nav__mobile${open ? " is--open" : ""}`}>
        {[...NAV_LINKS, { label: "À propos", href: "/about" }].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav__item--wrapper"
            onClick={() => setOpen(false)}
          >
            <span className="nav__item--title">{link.label}</span>
          </a>
        ))}
        <a href={EMAIL_HREF} className="cta menu is--mobile w-button">
          hello@bazil.fr
        </a>
      </div>
    </nav>
  );
}
