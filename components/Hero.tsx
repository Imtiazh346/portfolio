export default function Hero() {
  return (
    <section className="section is--intro">
      <div className="container-xl is--intro">
        <div className="intro__content-wrapper">
          <div className="intro__text is--first animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            👋, Hi, I'm
          </div>

          <div className="heading-outline__wrapper">
            <h1 className="heading-outline is--first animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <a href="/design" className="intro__link is--first">
               WordPress, Shopify, and MERN Stack              </a>
            </h1>
          </div>

          <div className="heading-outline__wrapper">
            <div className="heading-xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a href="/photos" className="intro__link-photo is--outline-text">
                 Developer 
              </a>
            </div>
          </div>

          
        </div>

        <img
          src="/web profile pic.png"
          alt="Portrait photo de Bazil Hamard, webdesigner et photographe"
          className="intro__photo animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        />

        <div className="intro__buttons">
          <a href="/design" className="cta__mobile inner--link w-button">
            Consultez mes créations
          </a>
          <a href="/photos" className="cta__mobile is--ghost inner--link w-button">
            Découvrez mes photos
          </a>
          <a href="/design" className="cta padding--right inner-link no--mobile is-transition w-button">
            View My Work
          </a>
          <a href="wa.link/byy7m5" className="cta is--ghost no--mobile is-transition w-button">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
