import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { PAGE_SIZE } from "../../utils/constant";
import Pages from "./Pagination";
import "./pagination.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const totalProducts = products.length;
  const numOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const json = await data.json();
    setProducts(json.products);
    setIsLoading(false);
  };

  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  if (!products.length) {
    return <h1>No Products Founds</h1>;
  }

  return (
    <>
      <h1>Pagination</h1>
      <div className="product-container">
        {products.slice(start, end).map((product) => (
          <ProductCard
            key={product.id}
            image={product.thumbnail}
            title={product.title}
          />
        ))}
      </div>
      <Pages
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        numOfPages={numOfPages}
      />
    </>
  );
};

export default Pagination;
