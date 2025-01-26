import  { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryPanel = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({ id: '', name: '' });
  const [isEditing, setIsEditing] = useState(false);
  
  const API_URL = 'http://localhost:8080/api/categories';

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => console.log('Error fetching categories', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    axios.post(API_URL, category)
      .then(response => {
        setCategories([...categories, response.data]);
        setCategory({ name: '' });
      })
      .catch(error => console.log('Error adding category', error));
  };

  const handleUpdate = () => {
    axios.put(`${API_URL}/${category.id}`, category)
      .then(response => {
        setCategories(categories.map(c => c.id === category.id ? response.data : c));
        setCategory({ id: '', name: '' });
        setIsEditing(false);
      })
      .catch(error => console.log('Error updating category', error));
  };

  const handleEdit = (categoryToEdit) => {
    setCategory(categoryToEdit);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setCategories(categories.filter(category => category.id !== id));
      })
      .catch(error => console.log('Error deleting category', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Categories CRUD</h1>
      
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={category.name}
          onChange={handleChange}
          className="border border-gray-300 rounded p-2"
          placeholder="Category Name"
        />
        <button
          onClick={isEditing ? handleUpdate : handleAdd}
          className="ml-2 bg-blue-500 text-white p-2 rounded"
        >
          {isEditing ? 'Update' : 'Add'}
        </button>
      </div>
  
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td className="border px-4 py-2">{category.id}</td>
              <td className="border px-4 py-2">{category.name}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleEdit(category)}
                  className="bg-yellow-500 text-white p-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="bg-red-500 text-white p-1 ml-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryPanel;
