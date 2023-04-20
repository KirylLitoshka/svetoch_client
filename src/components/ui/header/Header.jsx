import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <header className="page-header">
      <div className="content_container">
        <div className="page-header_content">
          <nav className="header-navigation">
            <ul className="header-navigation_list">
              <li className="header-navigation_list-item">
                <div className="header-navigation_list-button">
                  <Link to="/" className="header-navigation_list-item">
                    Главная
                  </Link>
                </div>
              </li>
              <li className="header-navigation_list-item">
                <div className="header-navigation_list-button">Content 3</div>
                <div className="header-navigation_sublist">
                  <Link to="/" className="header-navigation_sublist-item">
                    Sublist 3
                  </Link>
                  <Link to="/" className="header-navigation_sublist-item">
                    Sublist 3
                  </Link>
                  <Link to="/" className="header-navigation_sublist-item">
                    Sublist 3
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
          <div className="header-app_info">
            <div className="header-app_icon">Icon</div>
            <div className="header-app_name">App Name</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
