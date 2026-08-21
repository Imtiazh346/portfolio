// /**
//  * Site footer (replicates the .footer.is--black bar on bazil.fr): the credit
//  * line on the left and the section nav on the right, on a black background.
//  */
// export default function Footer() {
//   return (
//     <footer id="footer" className="footer is--black">
//       <div className="container is--footer">
//         <div className="footer__text">©Bazil - Site fait à la 👋 sur Webflow</div>
//         <nav className="footer__nav">
//           <a
//             href="/design"
//             aria-current="page"
//             className="nav__item text-white w--current"
//           >
//             Design
//           </a>
//           <a href="/photos" className="nav__item text-white">
//             Photos
//           </a>
//           <a href="/mentions-legales" className="nav__item text-white">
//             Mentions légales
//           </a>
//         </nav>
//       </div>
//     </footer>
//   );
// }

/**
 * Site footer: the credit line on the left and the section nav on the right, 
 * on a black background.
 */
export default function Footer() {
  return (
    <footer id="footer" className="footer is--black">
      <div className="container is--footer">
        <div className="footer__text">
          © {new Date().getFullYear()} Imtiaz Hussain. All rights reserved.
        </div>
        <nav className="footer__nav">
          <a
            href="#services"
            className="nav__item text-white"
          >
            Services
          </a>
          <a 
            href="#work" 
            className="nav__item text-white"
          >
            Work
          </a>
          <a 
            href="#contact" 
            className="nav__item text-white"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}