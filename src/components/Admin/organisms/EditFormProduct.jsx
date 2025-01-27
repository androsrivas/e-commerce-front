import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductContext';
import FeaturedSwitch from '../molecules/FeaturedSwitch';

function EditFormProduct({ product, isOpen, onClose }) {
  const { updateProductById } = useContext(ProductContext);
  const [ formData, setFormData ] = useState({ ...product });

  useEffect(() => {
    if (product) {
      setFormData({ ...product });
    }
  }, [ product ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [ name ]: value,
    }));
  };

  const handleSwitchChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [ name ]: checked,
    }));
  };

  const handleSubmit = async () => {
    await updateProductById(product.id, formData);
    onClose();
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${isOpen ? isOpen : onClose}`}>
      <div className="bg-white rounded-lg w-full max-w-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black">Edit Product</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-black">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-sm font-medium text-black">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {formData.imageUrl && (
            <img
              src={formData.imageUrl}
              alt="Image Preview"
              className="object-cover rounded-lg max-h-48 mt-4"
            />
          )}

          <div className="mt-4 mb-6">
            <label className="block text-sm font-medium text-black mb-1">Featured</label>
            <FeaturedSwitch
              isChecked={formData.featured || false}
              onChange={handleSwitchChange}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditFormProduct;
