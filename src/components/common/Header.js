import React from "react";
import { FaHotel } from "react-icons/fa";
import "./Header.scss";
const Header = () => {
  return (
    <header>
      <div className="header">
        <div class="container">
          <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div class="col-md-3 mb-2 mb-md-0">
              <a
                href="/"
                class="d-inline-flex link-body-emphasis text-decoration-none "
              >
                <div className="logo mx-auto flex justify-center items-center">
                  <FaHotel className="icon-logo text-3xl" />
                </div>
                <p className="name-company text-center text-3xl font-bold mb-0">
                  Hotelo
                </p>
              </a>
            </div>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" class="active nav-link px-2 link-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2">
                  Find Hotel
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2">
                  Book Hotel
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2">
                  Services
                </a>
              </li>
            </ul>

            <div class="col-md-3 text-end">
              <button type="button" class="btn btn-outline-primary me-2">
                Login
              </button>
              <button type="button" class="btn btn-primary">
                Sign-up
              </button>
            </div>
          </header>
        </div>
      </div>
    </header>
  );
};

export default Header;
