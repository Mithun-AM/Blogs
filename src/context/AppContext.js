import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    async function fetchBlogPost(page = 1, tag = null, category) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        if (tag) {
            url += `&tag=${tag}`
        }
        if (category) {
            url += `&category=${category}`
        }
        try {
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
        } catch (error) {
            console.trace(error);
            console.log(error);
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }

        setLoading(false);
    }

    function handlePageChange(page) {
        navigate({ search: `?page=${page}` })
        setPage(page);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        handlePageChange,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}