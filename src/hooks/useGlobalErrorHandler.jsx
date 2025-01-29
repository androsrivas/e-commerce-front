import { useState } from "react";

const useGlobalErrorHandler = () => {
    const [errors, setErrors] = useState([]);
    const [statusCode, setStatusCode] = useState(null);

    const handleError = (error) => {
        if (error.response) {
            const { data, status } = error.response;
            const messages = data?.messages || ["An unknown error occurred."];

            setErrors(messages);
            setStatusCode(status);
        } else if (error.request) {
            setErrors(["Network error: could not reach the server."]);
            setStatusCode(500);
        } else {
            setErrors([error.message || "Unexpected error occurred."]);
            setStatusCode(500);
        }
    };

    const clearErrors = () => {
        setErrors([]);
        setStatusCode(null);
    }

    return {  
        errors,
        statusCode,
        handleError,
        clearErrors
    };
};

export default useGlobalErrorHandler;