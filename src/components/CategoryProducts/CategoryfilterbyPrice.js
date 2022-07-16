import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import StickyFooter from "./StickFooter";
import style from "./categoryfilterbyprice.module.css";
import { Range } from "react-range";
import ClipIcon from "../../assets/images/clipicon.png";

const CategoryfilterbyPrice = ({
  setPrice,
  item,
  applyFilter,
  filterType,
  filterTypes,
  setFilter
}) => {
  const [val, setVal] = React.useState({ min: 0, max: 100 });
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 30,
  });
  // const MAX = 100;
  const [values, setValues] = React.useState([0, 30]);

  useEffect(() => {
    if (filterTypes) {
      console.log("filter typee", filterTypes);

      var filterItem = filterTypes?.findIndex((item) => item.id === "price_fq");

      filterItem = filterTypes[filterItem];

      if (filterItem) {
        let len = filterItem.data.length;

        let getInitialRate = parseInt(getSecondPart(filterItem.data[0].id, 0));
        let getEndRate = parseInt(
          getSecondPart(filterItem.data[len - 1].id, 1)
        );
        setValues([getInitialRate, getEndRate]);
        setPriceRange({
          min: getInitialRate,
          max: getEndRate,
        });
      }
    }
  }, [filterTypes]);
  function getSecondPart(str, index) {
    return str.split("-")[index];
  }

  return (
    <>
      <div className={style.list_Product}>
        <div className={`${style.closebutton} d-flex `}>
          <GrClose
            className={style.closeicon}
            onClick={() => setPrice(false)}
          />
          <p className={`${style.filterbutton} d-flex `}>Price range</p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1rem",
            marginBottom: "2rem",
            fontWeight: 500,
            fontSize: "12px",
            color: "#000",
          }}
        >
          <div>{`€${val.min}`}</div>
          <div>{`€${val.max}`}</div>
        </div>
        <Range
          values={values}
          step={STEP}
          min={priceRange.min}
          max={priceRange.max}
          onChange={(values) => {
            setValues(values);
          }}
          onFinalChange={(values) => {
            applyFilter(item.id, values);
          }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "6px",
                border: "2px solid",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "56px",
                width: "56px",
                borderRadius: "4px",
                background: `url(${ClipIcon})`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: "contain",
              }}
            ></div>
          )}
        />
        <output style={{ marginTop: "30px" }} id="output">
          {values[0].toFixed(1)} - {values[1].toFixed(1)}
        </output>
      </div>
    </>
  );
};

export default CategoryfilterbyPrice;
