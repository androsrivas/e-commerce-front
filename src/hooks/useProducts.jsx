import { useState, useEffect } from "react";
import { createProducts, getAllProducts, updateProduct, deleteProduct } from "../service/ProductService";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [loadingCount, setLoadingCount] = useState(0);
  const [errors, setErrors] = useState([]);

  const setLoading = (isLoading) => {
    setLoadingCount((prev) => prev + (isLoading ? 1 : -1));
  }

  const getAllProductsFromApiService = async () => {
    setLoading(true);
    setErrors([]);
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (errors) {
      setErrors((prevErrors) => [...prevErrors, "Error fetching products."]);
      console.error("Error fetching products: ", errors);
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (newProduct) => {
    setLoading(true);
    setErrors([]);
    try {
      const createdProduct = await createProducts(newProduct);
      setProducts((prevProducts) => [...prevProducts, createdProduct]);
    } catch (error) {
      setErrors((prevErrors) => [...prevErrors, "Error creating products."]);
      console.error("Error creating product:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateProductById = async (id, updatedProduct) => {
    setLoading(true);
    setErrors([]);
    try {
      const updated = await updateProduct(id, updatedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((product) => (product.id === id ? updated : product))
      );
    } catch (error) {
      setErrors((prevErrors) => [...prevErrors, "Error updating products."]);
      console.error("Error updating product:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProductById = async (id) => {
    setLoading(true);
    setErrors([]);
    try {
      await deleteProduct(id);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      setErrors((prevErrors) => [...prevErrors, "Error deleting products."]);
      console.error("Error deleting product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProductsFromApiService();
  }, [getAllProductsFromApiService]);

  return { 
    products, 
    loading: loadingCount > 0, 
    errors,
    createProduct, 
    updateProductById, 
    deleteProductById,
    refreshProducts: getAllProductsFromApiService 
  };
};

export default useProduct;
