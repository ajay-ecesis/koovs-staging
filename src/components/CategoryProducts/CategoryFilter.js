import React from "react";
import styles from "./categoryfilter.module.css";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const CategoryFilter = () => {
  return (
    <>
      <div className={`${styles.accordion_filter} d-block d-lg-none`}>
        <div className="closebutton d-flex justify-content-between ">
          <GrClose />
          <p className="d-flex">Filter</p>
        </div>
        <div className={styles.filtertext}>Filter</div>

        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {" "}
              <Link className="brand" to="/brand">
                {" "}
                Brand{" "}
              </Link>
            </Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {" "}
              <Link className="brand" to="/brand">
                {" "}
                Product Type
              </Link>
            </Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              {" "}
              <Link className="brand" to="/brand">
                {" "}
              </Link>
              Color
            </Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              {" "}
              <Link className="brand" to="/brand">
                {" "}
              </Link>
              Size
            </Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              {" "}
              <Link className="brand" to="/brand">
                {" "}
              </Link>
              Price Range
            </Accordion.Header>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};
export default CategoryFilter;
