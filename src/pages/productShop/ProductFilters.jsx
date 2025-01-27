import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductContext";
import ProductCard from "../../components/Customer/molecules/ProductCard/ProductCard";
import axios from "axios";

const ProductShop = () => {
  const { products, setProducts } = useContext(ProductContext);


  const [ categoryName, setCategoryName ] = useState("");
  const [ minPrice, setMinPrice ] = useState(0);
  const [ maxPrice, setMaxPrice ] = useState(1000);
  const [ filteredProducts, setFilteredProducts ] = useState(products);


  const [ categories, setCategories ] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log("Error fetching categories:", err));
  }, []);


  const handleCategoryChange = (e) => {
    setCategoryName(e.target.value);
  };


  const handlePriceChange = (e) => {
    if (e.target.name === "minPrice") {
      setMinPrice(e.target.value);
    } else if (e.target.name === "maxPrice") {
      setMaxPrice(e.target.value);
    }
  };


  const applyFilters = () => {
    const categoryFilterUrl = categoryName ? `&categoryName=${categoryName}` : '';
    const priceFilterUrl = `&minPrice=${minPrice}&maxPrice=${maxPrice}`;

    axios.get(`http://localhost:8080/api/products/filter?${categoryFilterUrl}${priceFilterUrl}`)
      .then((res) => {
        setFilteredProducts(res.data);
      })
      .catch((err) => console.log("Error fetching filtered products:", err));
  };

  useEffect(() => {
    applyFilters();
  }, [ categoryName, minPrice, maxPrice ]);

  return (
    <div className="customer-layout">
      <main className="main">
        <div className="filters mb-6 p-4 border border-gray-300 rounded-lg bg-white">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>


          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-800">Category</label>
            <select
              id="category"
              value={categoryName}
              onChange={handleCategoryChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>


          <div className="mb-4">
            <label htmlFor="minPrice" className="block text-gray-800">Price Range</label>
            <div className="flex space-x-4">
              <input
                type="number"
                name="minPrice"
                value={minPrice}
                onChange={handlePriceChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Min Price"
              />
              <input
                type="number"
                name="maxPrice"
                value={maxPrice}
                onChange={handlePriceChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Max Price"
              />
            </div>
          </div>


          <button
            onClick={applyFilters}
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Apply Filters
          </button>
        </div>


        <div className="grid grid-cols-4 gap-5">
          {filteredProducts.map(product => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductShop;
