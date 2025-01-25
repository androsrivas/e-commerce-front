import { useState, useEffect } from "react";

import { createProducts, getAllProducts, updateProduct, deleteProductById } from "../service/ProductService";

const useProduct = () => {
  const [products, setProducts] = useState([]);

  const getAllProductsFromApiService = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const createProduct = async (newProduct) => {
    const createdProduct = await createProducts(newProduct);
    setProducts((prevProducts) => [...prevProducts, createdProduct]);
  };

  const updateProductById = async (id, updatedProduct) => {
    const updated = await updateProduct(id, updatedProduct);
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === id ? updated : product))
    );
  };

  const deleteProductById = async (id) => {
    await deleteProductById(id);
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  useEffect(() => {
    getAllProductsFromApiService();
  }, []);

  return { products, createProduct, updateProductById, deleteProductById };
};

export default useProduct;