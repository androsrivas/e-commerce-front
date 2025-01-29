import { useState, useEffect, useCallback } from "react";
import { getAllCategories, createCategory, updateCategory, deleteCategory } from "";

const useCategory = () => {
    const [ categories, setCategories ] = useState([]);
    const [ loadingCount, setLoadingCount ] = useState(0);
    const [ errors, setErrors ] = useState([]);

    const setLoading = (isLoading) => {
        setLoadingCount((prev) => prev + (isLoading ? 1 : -1));
    };

    const getAllCategoriesFromApiService = useCallback(async() => {
        setLoading(true);
        setErrors([]);
        try {
            const data = await getAllCategories();
            setCategories(data);
        } catch (error) {
            setErrors((prevErrors) => [...prevErrors, "Error fetching categories."]);
            console.error("Error fetching categories: ", error);
        } finally {
            setLoading(false);
        }
    }, []);

    const createCategoryByName = useCallback(async(newCategory) => {
        setLoading(true);
        setErrors([]);
        try {
            const createdCategory = await createCategory(newCategory);
            setCategories((prevCategories) => [...prevCategories, createdCategory]);
        } catch (error) {
            setErrors((prevErrors) => [...prevErrors, "Error creating new category."]);
            console.error("Error createing new category: ", error);
        } finally {
            setLoading(false);
        }
    }, []);

    const updateCategoryById = useCallback(async(id, updatedCategory) => {
        setLoading(true);
        setErrors([]);
        try {
            const updated = await updateCategory(id, updatedCategory);
            setCategories((prevCategories) => 
                prevCategories.map((category) => (category.id === id ? updated : category))
            );
        } catch (error) {
            setErrors((prevErrors) => [...prevErrors, "Error updating category."]);
            console.error("Error updating category: ", error);
        } finally {
            setLoading(false);
        }
    }, []);

    const deleteCategoryById = useCallback(async(id) => {
        setLoading(true);
        setErrors([]);
        try {
            await deleteCategory(id);
            setCategories((prevCategories) => prevCategories.filter((category) => category.id !== id));
        } catch (error) {
            setErrors((prevErrors) => [...prevErrors, "Error deleting category."]);
            console.error("Error deleting category: ", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getAllCategoriesFromApiService();
    }, [getAllCategoriesFromApiService]);

    return {
        categories,
        loading: loadingCount > 0,
        errors,
        createCategory: createCategoryByName,
        updateCategory: updateCategoryById,
        deleteCategory: deleteCategoryById,
        refreshCategories: getAllCategoriesFromApiService
    };
};

export default useCategory;