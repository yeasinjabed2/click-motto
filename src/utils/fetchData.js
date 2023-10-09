import axiosInstance from "./axiosInstance";

export const fetchData = async (url, method = "get") => {
    const response = await axiosInstance[method](url);
    return response;
}
