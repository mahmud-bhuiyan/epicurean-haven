import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../../../public/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer footer-center p-10 bg-black/90  text-neutral-content">
        <div>
          <Link to="/">
            <img src={logo} alt="Epicurean Haven" width={30} height={30} />
          </Link>
          <p>
            Epicurean Haven
            <br />
            Indulge in the Finest Culinary Delights
          </p>
        </div>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <div>
              <div className="grid grid-flow-col gap-4">
                <Link to="#">
                  <FaFacebookF className="text-2xl" />
                </Link>
                <Link to="#">
                  <FaInstagram className="text-2xl" />
                </Link>
                <Link to="#">
                  <FaYoutube className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 bg-black/90 text-neutral-content border-base-300">
        <div className="items-center grid-flow-col">
          <p>© {currentYear} Epicurean Haven - All rights reserved</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://mahmud-bhuiyan.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Designed & Developed By: Mahmud
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
