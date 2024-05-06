import logo from "../../assets/jabberLogo.svg";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <>
      <div id="navbarContainer">
        <img src={logo} id="logo" alt="Logo" height={120} width={120} />
        <div id="navLinksContainer">
          <a
            href="https://github.com/hklim1/rh-challenge-laravel-backend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Laravel Repo
          </a>
          <a
            href="https://github.com/hklim1/rh-challenge-react-version"
            target="_blank"
            rel="noopener noreferrer"
          >
            ReactJS Repo
          </a>
          <a href="/users" className="active">
            Users
          </a>
        </div>
      </div>
    </>
  );
};
