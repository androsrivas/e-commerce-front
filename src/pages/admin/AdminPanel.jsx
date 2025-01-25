import { useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductContext";
import CreateProductBtn from "../../components/Admin/atoms/adminCrudBtns/CreateProductBtn";
import DeleteProductBtn from "../../components/Admin/atoms/adminCrudBtns/DeleteProductBtn";
import EditProductBtn from "../../components/Admin/atoms/adminCrudBtns/EditProductBtn";
import SearchBar from "../../components/Admin/organisms/SearchBar";
import { useNavigate } from 'react-router-dom';

import ProductTable from "../../components/Admin/organisms/ProductTable";

const AdminPanel = () => {
  const { products, updateProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  const [showFeatured, setShowFeatured] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCreateProduct = () => {
    navigate('/create-product');
  };
  const filteredProducts = products.filter(product => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFeatured = showFeatured ? products.featured : true;
    return matchesSearchTerm && matchesFeatured;
  });
  const handleFeaturedChange = async (id, isFeatured) => {
    const updatedProduct = products.find(product => product.id === id);
    if (updatedProduct) {
      updatedProduct.featured = isFeatured;
      await updateProduct(id, updatedProduct);
    }
  };

  return (
    <main>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold">Product Management</h1>
        
       <div className="flex items-center mb-5">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <label htmlFor="show-featured" className="text-black ml-2 mb-4">Show Featured Only</label>
        <input
          id="show-featured"
          type="checkbox"
          checked={showFeatured}
          onChange={() => setShowFeatured(!showFeatured)}
          className="ml-2 h-5 w-5 text-indigo-600 bg-gray-200 rounded-full"
        />
        <CreateProductBtn
          onClick={handleCreateProduct}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md"
        />
      </div>
      </div>
      <ProductTable products={filteredProducts} onFeaturedChange={handleFeaturedChange}/>
    </main>
  );
};

export default AdminPanel;
