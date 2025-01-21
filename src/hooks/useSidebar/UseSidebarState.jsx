import { useState } from "react";

export function useSidebarState() {
    const [ openItems, setOpenItems ] = useState({});

    const toggleItem = (title) => {
        setOpenItems((prev) => ({
            ...prev,
            [title]: !prev[title]
        }));
    };

    return { openItems, toggleItem };
}