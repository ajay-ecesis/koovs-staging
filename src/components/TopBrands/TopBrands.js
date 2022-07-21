import React from "react";
import "./topbrands.css";
import { Link } from "react-router-dom";

class TopBrands extends React.Component {
  render() {
    return (
      <section className="top_brands pb-5">
        <div className="container-fluid">
          <div className="col-12 d-flex justify-content-between py-4">
            <div className="">Top Brands</div>
            <div>
              <a>
                <u>View All</u>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="top-brand-content py-0 py-lg-5"
            style={{ cursor: "pointer" }}
          >
            <Link
              to="/category/361-degree"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              361 Degree,
            </Link>{" "}
            <Link
              to="/category/amon"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              AMON,{" "}
            </Link>


          
            <Link
              to="/category/attic"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              ATTIC SALT,{" "}
            </Link>
            <Link
              to="/category/blue-saint "
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              Blue Saint,{" "}
            </Link>
            <Link
              to="/category/bollywoo"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              Bollywoo,{" "}
            </Link>
            <Link
              to="/category/diwaah"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              DIWAAH,{" "}
            </Link>
            <Link
              to="/category/freakins"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              Freakins,{" "}
            </Link>
            <Link
              to="/category/good-stuff"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              Good Stuff,{" "}
            </Link>
            <Link
              to="/category/koovs"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              KOOVS,{" "}
            </Link>
            <Link
              to="/category/new"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              LC Waikiki,{" "}
            </Link>
            <Link
              to="/category/new"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              New,{" "}
            </Link>


            <Link
              to="/category/oxolloxo"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              OXOLLOXO,{" "}
            </Link>

            <Link
              to="/category/one-by-zero"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              ONE/ZERO BY KOOVS,{" "}
            </Link>

            <Link
              to="/category/peak"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              Peak
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default TopBrands;
