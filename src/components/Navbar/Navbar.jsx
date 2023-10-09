import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { ImPinterest } from "react-icons/im";
import { MdOutlineFacebook } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import dots from "../../assets/dot-3.png";
import logo from "../../assets/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const handleDropdown = (e) => {
    const el = e.target.children[1];
    if (el) {
      if (el.classList.contains("show")) {
        return el.classList.remove("show");
      }

      el.classList.add("show");
    }
  };

  const handleMenuOpen = () => {
    const el = document.querySelector(".menu-slider-container");
    if (!el) return;
    el.classList.add("show");
  };

  return (
    <>
      {" "}
      <MenuSlider />
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <button className="menu-btn" onClick={handleMenuOpen}>
            <RiMenu3Fill />
          </button>
          <div className="menu">
            <ul>
              <li>Explore</li>
              <li>Discover</li>
              <li>For Professional</li>
              <li>Portfolio</li>

              <li onClick={handleDropdown}>
                <img src={dots} alt="dots" />
                <ul className="dropdown-menu">
                  <li>About Click Moto</li>
                  <li>Pricing</li>
                  <li>License</li>
                  <li>Partnerships</li>
                  <li>Blog</li>
                  <li>Help</li>
                  <li>Join The Tear</li>
                  <li className="social">
                    <MdOutlineFacebook />
                    <AiFillTwitterCircle />
                    <AiFillInstagram />
                    <ImPinterest />
                  </li>
                </ul>
              </li>
            </ul>
            <div className="nav_buttons">
              <button className="btn_outline">Submit Photos</button>
              <span></span>
              <button className="btn_transparent">Login</button>
              <button className="btn-primary">Join Free</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const MenuSlider = () => {
  const handleMenuClose = () => {
    const el = document.querySelector(".menu-slider-container");
    if (el.classList.contains("show")) {
      return el.classList.remove("show");
    }
  };

  return (
    <div className="menu-slider-container" onClick={handleMenuClose}>
      <ul>
        <li>
          <img src={logo} alt="" />
        </li>
        <li>Explore</li>
        <li>Discover</li>
        <li>For Professional</li>
        <li>Portfolio</li>
        <li>About Click Moto</li>
        <li>Pricing</li>
        <li>License</li>
        <li>Partnerships</li>
        <li>Blog</li>
        <li>Help</li>
        <li>Join The Tear</li>
        <li className="social">
          <MdOutlineFacebook />
          <AiFillTwitterCircle />
          <AiFillInstagram />
          <ImPinterest />
        </li>
      </ul>
    </div>
  );
};
