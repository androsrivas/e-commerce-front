import { useState } from "react";
import useGlobalErrorHandler from "./useGlobalErrorHandler";

const useApiCall = () => {
    const [ loadingCount, setLoadingCount ] = useState(0);
    const { errors, handleError, clearErrors } = useGlobalErrorHandler();

    const setLoading = (isLoading) => {
        setLoadingCount((prev) => prev + (isLoading ? 1 : -1));
    };

    const apiCall = async(apiCall, successCallback) => {
        setLoading(true);
        clearErrors();
        try {
            const data = await apiCall();
            successCallback(data);
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    return { apiCall, loading: loadingCount > 0, errors };
};

export default useApiCall;