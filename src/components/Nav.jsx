import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Library.svg";
import { Link } from "react-router-dom";

const Nav = ({ numberOfItems }) => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={LibraryLogo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/books" className="nav__link nav__link--primary">
              Books
            </Link>
          </li>
          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
            {numberOfItems && (
              <span className="cart__length">{numberOfItems()}</span>
            )}
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/books" className="menu__link" onClick={closeMenu}>
                Books
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/cart" className="menu__link" onClick={closeMenu}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
