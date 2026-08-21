/** Words shown on the filled (bottom) line of the diagonal marquee. */
const SKILLS = [
  "Webdesign",
  "Graphisme",
  "Strategie",
  "Photographie",
  "Webflow",
];

/** Phrase repeated on the outlined (top) line. */
const OUTLINE_PHRASE = "Show me what you got !";

/**
 * Diagonal, infinitely-scrolling text band (replicates the marquee on
 * bazil.fr/design). Two rows tilt across the viewport and loop in opposite
 * directions: an outlined catch-phrase on top, the list of services below.
 * Content is duplicated once per row so the -50% keyframe loops seamlessly.
 */
export default function Marquee() {
  const outline = Array.from({ length: 4 }, () => OUTLINE_PHRASE);
  const filled = SKILLS;

  return (
    <section className="section is--marquee" aria-hidden="true">
      <div className="marquee__band">
        {/* Outlined row — scrolls left */}
        <div className="marquee__row is--outline">
          <div className="marquee__track">
            {[0, 1].map((dup) => (
              <span key={dup} className="marquee__group">
                {outline.map((phrase, i) => (
                  <span key={`${dup}-${i}`} className="marquee__word">
                    {phrase}
                    <span className="marquee__sep"> - </span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* Filled row — scrolls right */}
        <div className="marquee__row is--fill">
          <div className="marquee__track is--reverse">
            {[0, 1].map((dup) => (
              <span key={dup} className="marquee__group">
                {filled.map((word, i) => (
                  <span key={`${dup}-${i}`} className="marquee__word">
                    {word}
                    <span className="marquee__sep"> · </span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
