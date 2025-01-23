import { ProductContext } from "./ProductContext";


const ProductProvider = ({ children }) => {
  const {products, createProduct, updateProductById, deleteProductById} = useProduct();

  return(
    <ProductContext.Provider value={{ products, createProduct, updateProductById, deleteProductById}}>
     {children}
    </ProductContext.Provider>
  );
  
};

export default ProductProvider;