import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

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
                <div className="header-navigation_sublist">
                  <Link to="objects" className="header-navigation_sublist-item">
                    Объекты
                  </Link>
                  <Link
                    to="subobjects"
                    className="header-navigation_sublist-item"
                  >
                    Подобъекты
                  </Link>
                  <Link to="renters" className="header-navigation_sublist-item">
                    Арендаторы
                  </Link>
                  <Link to="limits" className="header-navigation_sublist-item">
                    Предельные уровни
                  </Link>
                </div>
              </li>
              <li className="header-navigation_list-item">
                <div className="header-navigation_list-button">Справочники</div>
                <div className="header-navigation_sublist">
                  <Link
                    to="catalogues/rates"
                    className="header-navigation_sublist-item"
                  >
                    Тарифы
                  </Link>
                  <Link
                    to="catalogues/ciphers"
                    className="header-navigation_sublist-item"
                  >
                    Шифры
                  </Link>
                  <Link
                    to="/catalogues/meters"
                    className="header-navigation_sublist-item"
                  >
                    Марки счетчиков
                  </Link>
                  <Link
                    to="/catalogues/areas"
                    className="header-navigation_sublist-item"
                  >
                    Участки
                  </Link>
                  <Link
                    to="/catalogues/workshops"
                    className="header-navigation_sublist-item"
                  >
                    Цеха
                  </Link>
                  <Link
                    to="/catalogues/banks"
                    className="header-navigation_sublist-item"
                  >
                    Банки
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
