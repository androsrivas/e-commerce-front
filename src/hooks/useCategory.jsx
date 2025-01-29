import { useState, useEffect, useCallback } from "react";
import { getAllCategories, createCategory, updateCategory, deleteCategory } from "../service/CategoryService";
import useGlobalErrorHandler from "./useGlobalErrorHandler";

const useCategory = () => {
    const [ categories, setCategories ] = useState([]);
    const [ loadingCount, setLoadingCount ] = useState(0);
    const { errors, handleError, clearErrors } = useGlobalErrorHandler();

    const setLoading = (isLoading) => {
        setLoadingCount((prev) => prev + (isLoading ? 1 : -1));
    };

    const getAllCategoriesFromApiService = useCallback(async() => {
        setLoading(true);
        clearErrors();
        try {
            const data = await getAllCategories();
            setCategories(data);
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    }, [clearErrors, handleError]);

    const createCategoryByName = useCallback(async(newCategory) => {
        setLoading(true);
        clearErrors();
        try {
            const createdCategory = await createCategory(newCategory);
            setCategories((prevCategories) => [...prevCategories, createdCategory]);
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    }, [clearErrors, handleError]);

    const updateCategoryById = useCallback(async(id, updatedCategory) => {
        setLoading(true);
        clearErrors();
        try {
            const updated = await updateCategory(id, updatedCategory);
            setCategories((prevCategories) => 
                prevCategories.map((category) => (category.id === id ? updated : category))
            );
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    }, [clearErrors, handleError]);

    const deleteCategoryById = useCallback(async(id) => {
        setLoading(true);
        clearErrors
        try {
            await deleteCategory(id);
            setCategories((prevCategories) => prevCategories.filter((category) => category.id !== id));
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    }, [clearErrors, handleError]);

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