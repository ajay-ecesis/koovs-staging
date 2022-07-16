import React, { useState } from "react";
import styles from "./categoryfilterbycolor.module.css";
import { GrClose } from "react-icons/gr";
import StickyFooter from "./StickFooter";

import { Accordion } from "react-bootstrap";

const CategoryfilterbyColor = ({ setColor, item, applyFilter, filterType, setFilter }) => {
  const [isSelect, setSelect] = useState(false);
  return (
    <>
      <div className={styles.list_color}>
        <div className={`${styles.closebutton} d-flex `}>
          <GrClose
            className={styles.closeicon}
            onClick={() => setColor(false)}
          />
          <p className={`${styles.filterbutton} d-flex `}>Color</p>
        </div>

        <Accordion defaultActiveKey="0" flush>
          {item?.data?.map((color) => {
            return (
              <>
                <Accordion.Item
                  eventKey={color.id}
                  className={styles.productborder}
                >
                  <Accordion.Header
                    className="arrownone"
                    onClick={() => applyFilter(item.id, color.id)}
                  >
                    <div className={styles.color_content}>
                      <span
                        style={{
                          backgroundColor: color.code,
                        }}
                      ></span>

                      <p>{color.label}</p>

                      {filterType.color_fq.includes(color.id) && (
                        <i
                          class="fa fa-check check-tick"
                          aria-hidden="true"
                        ></i>
                      )}
                    </div>
                  </Accordion.Header>
                </Accordion.Item>
              </>
            );
          })}
        </Accordion>
      </div>
      <StickyFooter  setFilter={setFilter}/>
    </>
  );
};

export default CategoryfilterbyColor;
