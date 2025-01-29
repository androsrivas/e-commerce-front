import { useState } from "react"

const useShowFeatured = () => {
    const [showFeatured, setShowFeatured] = useState(false);

    const toggleShowFeatured = () => {
        setShowFeatured(prev => !prev);
    };

    return { showFeatured, toggleShowFeatured };
};

export default useShowFeatured;