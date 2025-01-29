import { useState, useEffect, useCallback } from "react";
import { getAllCategories, getCategoryById, createCategory as createCategoryService, updateCategory, deleteCategory } from "../service/CategoryService";
import useApiCall from "./useApiCall";

const useCategory = () => {
    const [ categories, setCategories ] = useState([]);
    const [ category, setCategory ] = useState(null);
    const { apiCall, loading, errors } = useApiCall();

    const getAllCategoriesFromApiService = useCallback(() => {
        apiCall(getAllCategories, (data) => setCategories(data));
    }, [apiCall]);

    const getCategoryFromApiService = async (id) => {
        apiCall(
            () => getCategoryById(id),
            (fetchedCategory) => setCategory(fetchedCategory)
        );
    };
    
    const createNewCategory = async (newCategory) => {
        apiCall(
            () => createCategoryService(newCategory),
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
        category,
        loading,
        errors,
        createCategory: createNewCategory,
        updateCategory: updateCategoryById,
        deleteCategory: deleteCategoryById,
        getCategoryById : getCategoryFromApiService,
        refreshCategories: getAllCategoriesFromApiService
    };
};

export default useCategory;