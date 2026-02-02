import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(p => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
};

export default Home;
