import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import CategoryHeader from "../components/CategoryProducts/CategoryHeader";
import CategoryMainMenuSlider from "../components/CategoryProducts/MainCategoryMenuSlider";
import CategoryMainProductSlider from "../components/CategoryProducts/MainCategoryProductSlider";
import { useParams } from "react-router-dom";
import { loadProductByCategoryApi } from "../api/commonApi";
const CategoryMainPage = () => {
  let { category } = useParams();
  let { subcategory } = useParams();

  const [result, setResult] = useState();
  const [products, setProducts] = useState();
  const [sort, setSort] = useState("relevance");
  const [filterTypes, setFilterTypes] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    loadProductItemsBycategory();
  }, [category, subcategory, sort]);

  const loadProductItemsBycategory = async () => {
    if ((category, subcategory)) {
      let data = await loadProductByCategoryApi(
        category,
        subcategory,
        limit,
        sort,
        page
      );

      console.log("fetched results from result api", data);
      setProducts(data[0].data);
      setFilterTypes(data[1].data);
      setResult(data[0]);
    }
  };

  const changeSortOption = async (option) => {
    setSort(option);
  };

  return (
    <>
      <Header />
      <CategoryHeader
        category={category}
        subcategory={subcategory}
        result={result}
        changeSortOption={changeSortOption}
      />
      <CategoryMainMenuSlider products={products} />{" "}
      {/* shows the btn categories*/}
      <CategoryMainProductSlider
        products={products}
        filterTypes={filterTypes}
        result={result}
        changeSortOption={changeSortOption}
      />
    </>
  );
};

export default CategoryMainPage;
