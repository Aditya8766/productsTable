import "./products-table.scss";
function ProductTable(props) {
  const tableHeaders = [
    "Product-Id",
    "Product-Title",
    "Product-Description",
    "Product-Price",
  ];
  const { filteredData, headerText } = props;
  return (
    <div className="product-table">
      <div className="table-header">
        {tableHeaders.map((index, lable) => {
          return (
            <div className="header-text" key={`${headerText}${lable}`}>
              {`${index}`}
            </div>
          );
        })}
      </div>
      <div className="table">
        {filteredData?.map((data, index) => {
          return (
            <div
              key={`${headerText}${index}`}
              className="table-container"
            >
              <div className="id">{`${data.id}`}</div>
              <div className="title">{`${data.title}`}</div>
              <div className="description">{`${data.description}`}</div>
              <div className="price">{`${data.price}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProductTable;
