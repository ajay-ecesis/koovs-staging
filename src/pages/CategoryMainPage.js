import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import CategoryHeader from "../components/CategoryProducts/CategoryHeader";
import CategoryMainMenuSlider from "../components/CategoryProducts/MainCategoryMenuSlider";
import CategoryMainProductSlider from "../components/CategoryProducts/MainCategoryProductSlider";
import { useParams } from "react-router-dom";
import {
  loadProductByCategoryApi,
  loadProductsByFilter,
} from "../api/commonApi";
const CategoryMainPage = () => {
  let { category } = useParams();
  let { subcategory } = useParams();

  const [result, setResult] = useState();
  const [products, setProducts] = useState();
  const [sort, setSort] = useState("relevance");
  const [filterTypes, setFilterTypes] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(6);
  const [filterType, setFilterType] = useState({
    brand_fq: "",
    color_fq: "",
    price_fq: "",
    size_fq: "",
  });
  const [loading, setLoading] = useState(false);

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

      setProducts(data[0].data);
      setFilterTypes(data[1].data);
      setResult(data[0]);
    }
  };

  const changeSortOption = async (option) => {
    setSort(option);
  };

  // apply a new filter
  const applyFilter = (type, val) => {
    if (type == "price_fq") {
      val = val[0] + "-" + val[1];
    }
    const newobj = { ...filterType };
    newobj[type] = val;
    setFilterType(newobj);
  };

  useEffect(() => {
    loadFilteredResults(filterType);
  }, [filterType]);

  const loadFilteredResults = async () => {
    setLoading(true);
    let filteredResults = await loadProductsByFilter(
      category,
      subcategory,
      limit,
      sort,
      page,
      filterType
    );
    if (filteredResults) {
      setProducts(filteredResults[0]?.data);
      // setFilterTypes(filteredResults[1]?.data);
      setResult(filteredResults[0]);
    }

    setLoading(false);
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
        applyFilter={applyFilter}
        filterType={filterType}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );
};

export default CategoryMainPage;
