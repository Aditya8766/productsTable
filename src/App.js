import React, { useEffect, useState } from "react";
import ProductTable from "./components/ProductTable";
import Search from "./components/Search";
import getProducts from "./services";
function Products() {
  const [productData, setproductData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const Data = async () => {
    const products = await getProducts();
    setproductData(products);
    setFilteredData(products);
  };

  useEffect(() => {
    Data();
  }, []);

  useEffect(() => {
    const filter = productData.filter((val) =>
      val.title.toLowerCase().includes(searchText)
    );
    setFilteredData([...filter]);
  }, [searchText]);

  const handleSearch = (event) => {
    let value = event.target.value;
    setSearchText(value);
  };

  return (
    <div className="App">
      <Search handleSearch={handleSearch} searchText={searchText} />
      <ProductTable
        headerText={"Apple Products Store"}
        filteredData={filteredData}
      />
    </div>
  );
}

export default Products;
