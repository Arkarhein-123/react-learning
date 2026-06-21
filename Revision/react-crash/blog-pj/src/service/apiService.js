import axios from "axios";

// const BASEURL = "http://localhost:8080/api/posts";
const BASEURL = "http://localhost:3500/posts";
export const apiService = {
    getAllPosts: async () => {
        try {
            // ✓ Using global axios with the full path
            const response = await axios.get(BASEURL);
            return response.data;
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    },

    getPostById: async (id) => {
        // const response = await fetch(`${BASEURL}/${id}`);
        // if (!response.ok) throw Error("Data can't be fetched...");
        // return await response.json();
        try {
            const response = await axios.get(`${BASEURL}/${id}`);
            return response.data;
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    },

    createPost: async (newPostData) => {
        const formattedPost = {
            ...newPostData,
            datetime: new Date().toISOString().split("T")[0],
        };
        try {
            const response = await axios.post(BASEURL, formattedPost);
            return response.data;
        } catch (error) {
            console.log(error.response?.data?.message);
        }
    },
};
