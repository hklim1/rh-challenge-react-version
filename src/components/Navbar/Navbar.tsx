import logo from "../../assets/jabberLogo.svg";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <>
      <div id="navbarContainer">
        <img src={logo} id="logo" alt="Logo" height={120} width={120} />
        <div id="navLinksContainer">
          <text className="navLinks">Link 1</text>
          <text className="navLinks">Link 2</text>
        </div>
      </div>
    </>
  );
};
