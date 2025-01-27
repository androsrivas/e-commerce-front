import { useState, useEffect } from "react";
import { createProducts, getAllProducts, updateProduct, deleteProduct } from "../service/ProductService";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllProductsFromApiService = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (newProduct) => {
    try {
      const createdProduct = await createProducts(newProduct);
      setProducts((prevProducts) => [...prevProducts, createdProduct]);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const updateProductById = async (id, updatedProduct) => {
    try {
      const updated = await updateProduct(id, updatedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((product) => (product.id === id ? updated : product))
      );
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProductById = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    getAllProductsFromApiService();
  }, []);

  return { products, loading, createProduct, updateProductById, deleteProductById };
};

export default useProduct;
