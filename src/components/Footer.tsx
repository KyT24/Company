import { Link } from "react-router-dom";
import { tagline } from "../data/siteData";

function Footer() {
  return (
    <footer className="border-t border-navy-700 bg-navy-900">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold uppercase tracking-widest text-white">
            Pixel<span className="text-neon-light">Vault</span>
          </p>
          <p className="mt-2 text-silver">{tagline}</p>
        </div>
        <div>
          <p className="mb-2 font-semibold text-white">Explore</p>
          <ul className="space-y-1 text-silver">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-2 font-semibold text-white">Visit us</p>
          <p className="text-silver">Jl. Sudirman No. 10, Jakarta</p>
          <p className="text-silver">pixelvault@gmail.com</p>
        </div>
      </div>
      <p className="border-t border-navy-700 py-4 text-center text-sm text-silver-dark">
        © 2026 PixelVault. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;