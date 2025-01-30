import { CategoryContext } from "./CategoryContext";
import useCategory from "../../hooks/useCategory";

const CategoryProvider = ({ children }) => {
    const { categories, createCategory, updateCategoryById, deleteCategoryById, refreshCategories } = useCategory();

    return(
        <CategoryContext.Provider value={{
            categories,
            createCategory, 
            updateCategoryById,
            deleteCategoryById,
            refreshCategories
        }}>
            { children }
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;