import "./Footer.scss";
import {
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="contacts">
        <a href="https://www.facebook.com/harisrood/">
          <AiFillFacebook/>
        </a>
        <a href="https://github.com/Haris-Maulana">
          <AiFillGithub/>
        </a>
        <a href="https://www.linkedin.com/in/haris-maulana-57b06696/">
          <AiFillLinkedin/>
        </a>
        <a href="https://twitter.com/harismaulana000">
          <AiFillTwitterSquare/>
        </a>
      </div>
      <div className="copyright">© H-Company</div>
    </footer>
  );
};

export default Footer;
