import { useState, useEffect } from "react";

import { createProducts, getAllProducts, updateProduct, deleteProduct } from "../service/ProductService";

const useProduct = () => {
  const [products, setProducts] = useState([]);

  const getAllProductsFromApiService = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const createProduct = async (newProduct) => {
    const createProduct = await createProducts(newProduct);
    setProducts((prevProducts) => [...prevProducts, createProduct]);
  };

  const updateProductById = async (id, updateProduct) => {
    const updated = await updateProduct(id, updateProduct);
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === id ? updated : product))
    );
  };

  const deleteProductById = async (id) => {
    await deleteProduct(id);
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  useEffect(() => {
    getAllProductsFromApiService();
  }, []);

  return { products, createProduct, updateProductById, deleteProductById };
};

export default useProduct;