import axios from "axios";

const apiCustomersUrl = "http://localhost:8080/api/customers";

const getAllCustomers = async() => {
    const response = await axios.get(apiCustomersUrl);
    return response.data;
};

const getCustomerById = async() => {
    const response = await axios.get(`${apiCustomersUrl}/${id}`);
    return response.data;
}

const createCustomer = async(newCustomer) => {
    const response = await axios.post(apiCustomersUrl, newCustomer);
    return response.data;
};

const updateCustomer = async(id, updateCustomer) => {
    const response = await axios.put(`${apiCustomersUrl}/${id}`, updateCustomer);
    return response.data;
};

const deleteCustomer = async(id) => {
    const response = await axios.delete(`${apiCustomersUrl}/${id}`);
    return response.data;
};

export {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};