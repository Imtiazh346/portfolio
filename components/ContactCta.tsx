const CALENDLY = "https://calendly.com/bazilhamard/15min";

/**
 * "Prenons rendez-vous !" contact CTA (replicates .section.is--contact on
 * bazil.fr/design): a full-width office photo with a dark overlay and a
 * right-aligned, centred block holding the heading, copy and two buttons.
 */
export default function ContactCta() {
  return (
    <section className="section is--contact">
      <div className="container is--contact">
        <div className="contact__content is--centered">
          <h3 className="text-white contact__heading">
            Let’s Build Something Great!
          </h3>
          <p className="text-white contact__copy">
            Book a free 15-minute strategy call to discuss your project goals
            and map out a plan to maximize your conversions.{" "}
          </p>

          <div className="cta__footer-wrapper">
            <div className="margin-right">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="cta is--reverse w-button"
              >
                Book Free Consultation
              </a>
            </div>
            <a href="#" className="cta is--ghost white no--mobile w-button">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
