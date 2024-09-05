import axios from "axios";

export const getTasks = async (page, pageSize, signal) => {
    const response = await axios.get(
        `http://localhost:5000/tasks?_page=${page}&_limit=${pageSize}`,
        { signal }
    );

    return response.data;
};
