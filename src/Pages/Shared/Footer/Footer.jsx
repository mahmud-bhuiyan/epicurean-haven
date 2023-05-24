import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <Link to="/">
            <img src="" alt="Epicurean Haven" />
          </Link>
          <p>
            Epicurean Haven
            <br />
            Indulge in the Finest Culinary Delights
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
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
      </footer>
      <footer className="footer px-10 py-4 bg-black text-neutral-content border-base-300">
        <div className="items-center grid-flow-col">
          <p>© {currentYear} Epicurean Haven - All rights reserved</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <p>Designed & Developed By : Mahmud</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
