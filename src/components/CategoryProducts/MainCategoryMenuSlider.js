import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./maincategorymenuslider.css";
function CategoryMenuSlider({
  categoryName,
  filterTypes,
  applyFilter,
  filterType,
}) {
  const [filterOptions, setFilterOptions] = useState([]);
  const [gender, setGender] = useState(false);
  const [mainFilterName, setMainFilterName] = useState("");
  useEffect(() => {
    if (filterTypes?.length) {
      getStyleFilter();
    }
  }, [filterTypes]);

  const getStyleFilter = () => {
    let arr = filterTypes.filter((item) => {
      return item.id == "style_fq";
    });
    if (arr?.length >= 0) console.log("arr", arr[0].data);
    setMainFilterName(arr);
    setFilterOptions(arr[0]?.data);
  };

  return (
    <>
      {filterOptions?.length > 0 && (
        <section className="maincategory_menu_slider d-none d-lg-block">
          <h4 className="text-menu fw-bold d-lg-none">
            Where do you want to start?
          </h4>
          <div className="maincategory-buttons">
            {filterOptions?.length > 0 &&
              filterOptions?.slice(0, 7).map((item) => {
                return (
                  <>
                    <div className="btn ">
                      {filterType.style_fq.includes(item.id) ? (
                        <button
                          className="text-button active"
                          onClick={() =>
                            applyFilter(mainFilterName[0].id, item.id)
                          }
                        >
                          {item.label}
                        </button>
                      ):
                      <>
                       <button
                          className="text-button "
                          onClick={() =>
                            applyFilter(mainFilterName[0].id, item.id)
                          }
                        >
                          {item.label}
                        </button>
                      </>
                      }
                    </div>
                  </>
                );
              })}
          </div>
        </section>
      )}
    </>
  );
}

export default CategoryMenuSlider;
