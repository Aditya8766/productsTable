import React, { useEffect, useState } from "react";
import ProductTable from "./components/ProductTable";
import Search from "./components/Search";
import getProducts from "./services";
import Pagination from "./components/Pagination";

function Products() {
  const [productData, setproductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  const handleData = async () => {
    const products = await getProducts();
    setproductData(products);
    setFilteredData(products);
  };

  useEffect(() => {
    handleData();
  }, []);

  useEffect(() => {
    const filter = productData.filter((val) =>
      val.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData([...filter]);
  }, [searchText]);

  const handleSearch = (event) => {
    let value = event.target.value;
    setSearchText(value);
  };

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = filteredData?.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="App">
      <Search handleSearch={handleSearch} searchText={searchText} />
      <ProductTable
        headerText={"Apple Products Store"}
        filteredData={currentPost}
      />
      <Pagination
        totalPosts={filteredData.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Products;
