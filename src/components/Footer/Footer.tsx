import "./Footer.scss";
import logo from "../../assets/jabberLogo.svg";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <>
      <div id="footerContainer">
        <div id="footerLinks">
          <img src={logo} id="logo" alt="Logo" height={120} width={120} />
          <div id="socialLinksContainer">
            <text id="connectText">CONNECT WITH US</text>
            <div>
              <SocialIcon
                url="https://facebook.com"
                className="socialLinks"
                bgColor="white"
                fgColor="#7BC4E0"
              />
              <SocialIcon
                url="https://instagram.com"
                className="socialLinks"
                bgColor="white"
                fgColor="#7BC4E0"
              />
              <SocialIcon
                url="https://x.com"
                className="socialLinks"
                bgColor="white"
                fgColor="#7BC4E0"
              />
            </div>
          </div>
        </div>
        <div id="bottomBanner">
          <text className="footerText">© 2024 Jibber Jabber Inc.</text>
          <div id="legalLinks">
            <text className="footerText">Terms and Conditions</text>
            <text>•</text>
            <text className="footerText">Privacy Policy</text>
            <text>•</text>
            <text className="footerText">Contact</text>
          </div>
        </div>
      </div>
    </>
  );
};
