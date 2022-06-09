import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import koovslogo from "../../assets/images/KoovsLogo.png";
import koovsicon from "../../assets/images/Icon.png";
import { loadHeaderCategory } from "../../api/commonApi";
import { Card, Placeholder } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Header() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadHeaderItems();
  }, []);

  const loadHeaderItems = async () => {
    setLoading(true);
    let data = await loadHeaderCategory();
    setMenu(data);
    setLoading(false);
  };

  const toggleMainMenus = (e) => {
    let viewportWidth = window.innerWidth;
    if (viewportWidth < 767) {
      e.target.classList.toggle("open-main");
    }
  };

  const toggleSubClass = (e) => {
    e.target.classList.toggle("open-sub");
  };

  const loadingPlaceholder = () => {
    let temp = [1, 2, 3, 4, 5];
    return (
      <>
        {temp.map((count) => {
          return (
            <>
              <li className="main-menu">
                <ul className="nav-menu">
                  <li
                    className="nav-main-menu w-100"
                    onClick={(e) => this.toggleMainMenus(e)}
                  >
                    {" "}
                    <Skeleton count={10} />
                    <ul>
                      <li>
                        <Card style={{ width: "14rem", border: "none" }}></Card>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </>
          );
        })}
      </>
    );
  };

  return (
    <header>
      <div className="top-nav">
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" for="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li className="main-menu d-lg-none">
            <button className="btn btn-outline-dark rounded-0 px-5 mx-auto">
              SEARCH
            </button>
          </li>
          {loading && loadingPlaceholder()}

          {
            menu?.length > 0 &&
            menu.map((mainMenu) => {
              return (
                <>
                  <li className="main-menu">
                    <ul className="nav-menu">
                      <li
                        className="nav-main-menu w-100"
                        onClick={(e) => toggleMainMenus(e)}
                      >
                        {mainMenu.title}
                        <ul>
                          {mainMenu?.children.length > 0 &&
                            mainMenu.children.map((subMenu) => {
                              return (
                                <>
                                  {subMenu.action === "DROP_DOWN" ? (
                                    <>
                                      {" "}
                                      <li
                                        className="nav-sub-menu"
                                        onClick={(e) => toggleSubClass(e)}
                                      >
                                        {subMenu.title}
                                        <ul>
                                          {subMenu?.children?.length > 0 &&
                                            subMenu.children.map(
                                              (subMenuChild) => {
                                                return (
                                                  <>
                                                    <li>
                                                      <Link
                                                        className="nav-link"
                                                        to="/"
                                                      >
                                                        {subMenuChild.title}
                                                      </Link>
                                                    </li>
                                                  </>
                                                );
                                              }
                                            )}
                                        </ul>
                                      </li>
                                    </>
                                  ) : (
                                    <>
                                      {" "}
                                      <li>
                                        {" "}
                                        <Link
                                          className="nav-link"
                                          to="/view-all"
                                        >
                                          {subMenu.title ==
                                          "NEW ARRIVALS:FOOTWEAR & ACCESSORIES" ? (
                                            <>NEW ARRIVAL:FOOTWEAR</>
                                          ) : (
                                            <>{subMenu.title}</>
                                          )}
                                        </Link>
                                      </li>
                                    </>
                                  )}
                                </>
                              );
                            })}
                        </ul>
                      </li>
                    </ul>
                  </li>
                </>
              );
            })}
          <li className="main-menu">
            <ul>
              <li>
                {" "}
                <Link className="nav-link" to="/">
                  Log in / create account{" "}
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/">
                  Online support{" "}
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/">
                  Footwear
                </Link>
              </li>
              <li>
                {" "}
                <Link className="nav-link" to="/">
                  <u>Shipping to Denmark</u>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="nav-brand">
          <Link to="/">
            <img src={koovslogo} alt="Koovs Logo" />
          </Link>
        </div>
        <div className="d-flex align-items-center gap-4">
          <img
            src={koovsicon}
            height="23"
            alt="Koovs Search icon"
            className="d-none d-lg-block"
          />
          <div>
            <Link className="nav-link d-none d-lg-block" to="/">
              Account
            </Link>
          </div>
          <div>
            <Link className="nav-link" to="/cart">
              Cart (0)
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
