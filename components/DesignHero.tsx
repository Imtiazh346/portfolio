const CDN = "https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/";

const CONTACT_HREF =
  "mailto:hello@bazil.fr?subject=Prise%20de%20contact%20-%20Bazil.fr";

/** Client logos shown beneath the heading (replicates bazil.fr/design). */
const CLIENTS = [
  { name: "Audible", src: "61f28d9cce707e7605f2bfdc_Audible.webp" },
  { name: "Olympia Production", src: "61f2ba65aa262c2ee916df80_OP.webp" },
  { name: "Ballantine's", src: "61f28d9c2ac9c24bddc048a0_Ballantines.webp" },
  { name: "Jamel Debbouze", src: "645bb63c6228f1b593b10bf8_Jamel.webp" },
  { name: "MHD", src: "645bb651d80446ec420cedc7_MHD.webp" },
  { name: "Supermood", src: "645bb651603a6c2d7c52c6f9_Supermood.webp" },
  { name: "Rock en Seine", src: "645bb6514df11f2e6b081671_RES.webp" },
  { name: "Krug", src: "645bb6a3d559c0cd8fab3be5_Krug.webp" },
  { name: "Swile", src: "645bb651d3ac4de0721dc62c_Swile_black.webp" },
  { name: "Cokau Lab", src: "645bb6a31432f497bfb447ca_Cokau.webp" },
  { name: "Patrick Timsit", src: "645bb651fa6ce94c14bb8895_Timsit.webp" },
];

export default function DesignHero() {
  return (
    <section className="section is--design">
      <div className="design__inner">
        <p
          className="design__tagline animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          FULL STACK WEB DEVELOPER • ECOMMERCE SPECIALIST • UI/UX DESIGNER
        </p>

        <h1
          className="heading-xl design__heading animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Building Modern Websites & High-Converting
          eCommerce Experiences.
        </h1>

        <a
          href={CONTACT_HREF}
          className="cta is--ghost design__cta animate-fade-in-up w-button"
          style={{ animationDelay: "0.35s" }}
        >
          Let's Build Your Project
        </a>

        <div
          className="design__clients animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
          aria-label="Ils m'ont fait confiance"
        >
          {CLIENTS.map((client) => (
            <img
              key={client.name}
              src={`${CDN}${client.src}`}
              alt={client.name}
              className="design__client-logo"
              loading="lazy"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
