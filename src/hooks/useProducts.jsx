import { useState, useEffect } from "react";
import { createProducts, getAllProducts, updateProduct, deleteProduct } from "../service/ProductService";
import useApiCall from "./useApiCall";
import { useCallback } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const { apiCall, loading, errors } = useApiCall();

  const getAllProductsFromApiService = useCallback(() => {
    apiCall(getAllProducts, (data) => setProducts(data));
  }, [apiCall]);

  const createProduct = async (newProduct) => {
    apiCall(
      () => createProducts(newProduct),
      (createdProduct) => setProducts((prevProducts) => [...prevProducts, createdProduct])
    );
  };

  const updateProductById = async (id, updatedProduct) => {
    apiCall(
      () => updateProduct(id, updatedProduct),
      (updated) =>
        setProducts((prevProducts) =>
          prevProducts.map((product) => (product.id === id ? updated : product))
        )
    );
  };

  const deleteProductById = async (id) => {
    apiCall(
      () => deleteProduct(id),
      () => setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id))
    );
  };


  useEffect(() => {
    getAllProductsFromApiService();
  }, [getAllProductsFromApiService]);

  return { 
    products, 
    loading,
    errors,
    createProduct, 
    updateProductById, 
    deleteProductById,
    refreshProducts: getAllProductsFromApiService 
  };
};

export default useProduct;
