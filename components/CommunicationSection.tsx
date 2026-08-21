const CDN = "https://cdn.prod.website-files.com/61dd9ddd76c6a058a47a4c57/";

/**
 * Event posters split across two side-by-side columns (bazil.fr/design).
 * The left column is offset downward so the two columns interlock.
 */
const COLUMN_LEFT = [
  { name: "Laura Domenge — La Nouvelle Seine", img: "6450c8d469680c9a03745782_Affiche%20-%20Laura.webp" },
  { name: "Éric & Quentin", img: "6450c8d4a698eddd8312ecfe_Affiche%20-%20Eric%20%26%20Quentin.webp" },
  { name: "Adrien Montowski", img: "6450c8d42c0afc24af8fb044_Affiche%20-%20Adrien.webp" },
];

const COLUMN_RIGHT = [
  { name: "One More Joke — Le Jardin Sauvage", img: "6450c8d4a3e63f1f3fb052f6_Affiche%20-%20OMJ.webp" },
  { name: "Réda Seddiki — Ironie de l'histoire", img: "6450c8d4b3a4686a24208106_Affiche%20-%20Reda.webp" },
];

/**
 * "Communication visuelle" section (replicates bazil.fr/design): a sticky
 * left-hand text block beside a staggered, zig-zagging column of event
 * posters that scroll past while the text stays pinned.
 */
export default function CommunicationSection() {
  return (
    <section className="section is--communication">
      <div className="communication__inner">
        <div className="communication__text">
          <p className="communication__tagline">Communication visuelle</p>
          <h2 className="heading-xl communication__heading">
            Tourné vers l&apos;évènementiel
          </h2>
          <p className="communication__copy">
            Votre projet de création nécessite de la communication
            événementielle&nbsp;?
          </p>
          <p className="communication__copy">
            Avec plus de 8 ans d&apos;expérience dans ce domaine, je conçois des
            identités graphiques mémorables pour vos événements. Du logo à
            l&apos;affiche en passant par les cartons d&apos;invitation&nbsp;:{" "}
            <strong>
              concentrez-vous sur l&apos;organisation, je m&apos;occupe de votre
              communication.
            </strong>
          </p>
        </div>

        <div className="communication__cards">
          <div className="communication__col is--left">
            {COLUMN_LEFT.map((poster) => (
              <figure key={poster.name} className="communication__card">
                <img
                  src={`${CDN}${poster.img}`}
                  alt={poster.name}
                  className="communication__img"
                  loading="lazy"
                  draggable={false}
                />
              </figure>
            ))}
          </div>
          <div className="communication__col is--right">
            {COLUMN_RIGHT.map((poster) => (
              <figure key={poster.name} className="communication__card">
                <img
                  src={`${CDN}${poster.img}`}
                  alt={poster.name}
                  className="communication__img"
                  loading="lazy"
                  draggable={false}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
