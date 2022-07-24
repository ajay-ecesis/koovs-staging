import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./categorymenuslider.css";
function CategoryMenuSlider({ categoryName }) {
  const menNavigation = [
    {
      title: "Shirts",
      link: "/men/shirts",
    },
    {
      title: "Jeans",
      link: "/men/jeans",
    },
    {
      title: "Footwear",
      link: "/men/footwear",
    },

    {
      title: "T-shirts",
      link: "/men/t-shirts-and-polo-shirts",
    },

    {
      title: "Accessories",
      link: "/men/accessories",
    },
    {      title: "Hoodies and Sweatshirts",
    link: "/men/hoodies-and-sweatshirts",
     
    },
    {      title: "Shoes",
    link: "/men/shoes",
     
    }
  ];

  const womenNavigation = [
    {
      title: "Dresses",
      link: "/women/dresses",
    },
    {
      title: "Shirts",
      link: "/women/dresses",
    },
    {
      title: "Jeans",
      link: "/women/jeans",
    },
    {
      title: "Footwear",
      link: "/women/footwear",
    },

    {
      title: "Tops",
      link: "/women/tops",
    },

    {
      title: "Accessories",
      link: "/women/accessories",
    },
    {
      title: "Trousers and leggings",
      link: "/women/trousers-and-leggings",
    },
 
  ];

  const [gender, setGender] = useState(false);

  useEffect(() => {
    if (categoryName=="men"||categoryName=="Men") {
      setGender(menNavigation);
    }
    else if (categoryName=="women"||categoryName=="Women")
    {
        setGender(womenNavigation)
    }

  }, [categoryName]);

  return (
    <section className="category_menu_slider">
      <h4 className="text-menu fw-bold d-block d-lg-none">
        Where do you want to start?
      </h4>

      <div className="category-buttons">
        {gender?.length > 0 &&
          gender.map((item) => {
            return (
              <>
                <div className="btn ">
             <Link to={`/category${item.link}`}>    <button className="text-button">{item.title}</button></Link> 
                </div>
              </>
            );
          })}
      </div>
      {/* <div className='row d-none d-lg-none'>

                
                <div id="outer">

                    <button class="div">New In</button>
                    <button class="div">Clothing</button>
                    <button class="div">Footwear</button>
                    <button class="div">Party clothing</button>
                    <button class="div">Dresses,Skirts</button>
                    <button class="div">Jackets,Coats</button>
                    <button class="div">Sneakers</button>
                    <button class="div">Footwear</button>
                    <button class="div">Party clothing</button>
                </div>
            </div> */}
    </section>
  );
}

export default CategoryMenuSlider;
