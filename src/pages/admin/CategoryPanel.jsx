import  { useState, useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { TrashIcon } from '@heroicons/react/24/solid';
import { Button } from "@/components/ui/button";
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
        setCategories(categories.map(category => category.id === category.id ? response.data : category));
        setCategory({ id: '', name: '' });
        setIsEditing(false);
      })
      .catch(error => console.log('Error updating category', error));
  };

  const handleEdit = (categoryToEdit) => {
    console.log(categoryToEdit)
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
    <div className="max-w-4xl mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
    <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">Categories CRUD</h1>

    <div className="mb-6">
      <input
        type="text"
        name="name"
        value={category.name}
        onChange={handleChange}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Category Name"
      />
      <button
        onClick={isEditing ? handleUpdate : handleAdd}
        className="w-full py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {isEditing ? 'Update Category' : 'Add Category'}
      </button>
    </div>

    <table className="min-w-full table-auto border-separate border-spacing-0">
      <thead>
        <tr>
          <th className="border px-4 py-2 bg-gray-100">ID</th>
          <th className="border px-4 py-2 bg-gray-100">Name</th>
          <th className="border px-4 py-2 bg-gray-100">Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories.map(category => (
          <tr key={category.id}>
            <td className="border px-4 py-2">{category.id}</td>
            <td className="border px-4 py-2">{category.name}</td>
            <td className="border px-4 py-2 text-center  space-x-2">
              <Button
                onClick={() => handleEdit(category.id)}
                className="rounded-md bg-indigo-500"
              >
                <PencilSquareIcon className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => handleDelete(category.id)}
                variant="destructive"
              >
               <TrashIcon/>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default CategoryPanel;
