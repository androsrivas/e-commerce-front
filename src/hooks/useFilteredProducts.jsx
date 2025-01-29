import { useMemo } from "react";

const useFilteredProducts = (products, searchTerm, showFeatured) => {
    return useMemo(() => {
        return products.filter(product => {
            const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFeatured = showFeatured ? product.featured : true;
            return matchesSearchTerm && matchesFeatured;
        });
    }, [products, searchTerm, showFeatured]); 
};

export default useFilteredProducts