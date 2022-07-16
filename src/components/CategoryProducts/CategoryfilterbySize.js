import React from "react";
import style from "./categoryfilterbysize.module.css";
import { GrClose } from "react-icons/gr";
import StickyFooter from "./StickFooter";
import { Accordion } from "react-bootstrap";

const CategoryfilterbySize = ({ setSize, item, applyFilter, filterType,setFilter }) => {
  return (
    <>
      <div className={style.list_Product}>
        <div className={`${style.closebutton} d-flex `}>
          <GrClose className={style.closeicon} onClick={() => setSize(false)} />
          <p className={`${style.filterbutton} d-flex `}>Product Type</p>
        </div>

        <Accordion defaultActiveKey="0" flush>
          {item.data.map((size) => {
            return (
              <>
                <Accordion.Item
                  eventKey={item.id}
                  className={style.productborder}
                  onClick={() => applyFilter(item.id, size.id)}
                >
                  <Accordion.Header className="arrownone">
                    <div className={style.size_content}>

                      <p>   {size.label}</p>
                   
                      {filterType.size_fq.includes(size.id) && (
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
      <StickyFooter setFilter={setFilter}/>
    </>
  );
};

export default CategoryfilterbySize;
