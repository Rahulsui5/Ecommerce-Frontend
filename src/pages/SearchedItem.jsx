import React from "react";
import Cards from "./Cards";
import { useContextCart } from "@/context/CardContext";
const SearchedItem = () => {
  const { obj } = useContextCart();
  const products = obj.products;
  let product = products.filter(
    (product) =>
      product.name.toLowerCase().includes(obj.search.toLowerCase()) ||
      product.category.toLowerCase().includes(obj.search.toLowerCase()) ||
      product.brand.toLowerCase().includes(obj.search.toLowerCase()) ||
      product.subCategory.toLowerCase().includes(obj.search.toLowerCase())
  );

  if (product.length === 0)
    return (
      <div className="text-xl font-bold flex justify-center mt-5">
        No Result Found
      </div>
    );
  return (
    <div>
      <Cards products={product} categoryname="Result" />
    </div>
  );
};

export default SearchedItem;
