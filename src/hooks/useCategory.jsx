import { useState, useEffect, useCallback } from "react";
import { createCategory, getAllCategories, updateCategory, deleteCategory } from "../service/CategoryService";
import useApiCall from "./useApiCall";
const useCategory = () => {
    const [ categories, setCategories ] = useState([]);
    const { apiCall, loading, errors } = useApiCall();

    const getAllCategoriesFromApiService = useCallback(() => {
        apiCall(getAllCategories, (data) => setCategories(data));
    }, [apiCall]);
    
    const createCategory = async (newCategory) => {
        apiCall(
            () => createCategory(newCategory),
            (createdCategory) => setCategories((prevCategories) => [...prevCategories, createdCategory])
        );
    };

    const updateCategoryById = async (id, updatedCategory) => {
    apiCall(
        () => updateCategory(id, updatedCategory),
        (updated) =>
        setCategories((prevCategories) =>
            prevCategories.map((category) => (category.id === id ? updated : category))
        )
    );
    };

    const deleteCategoryById = async (id) => {
    apiCall(
        () => deleteCategory(id),
        () => setCategories((prevCategories) => prevCategories.filter((category) => category.id !== id))
    );
    };

    useEffect(() => {
        getAllCategoriesFromApiService();
    }, [getAllCategoriesFromApiService]);

    return {
        categories,
        loading,
        errors,
        createCategory,
        updateCategoryById,
        deleteCategoryById,
        refreshCategories: getAllCategoriesFromApiService
    };
};

export default useCategory;