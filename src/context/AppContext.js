import { createContext, useState, useCallback, useEffect } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme");
    });

    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.toggle("dark", theme);
        localStorage.setItem("theme", theme ? "dark" : "light");
    }, [theme]);

    const fetchBlogPost = useCallback(async (page = 1, tag = null, category = null) => {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        if (tag) {
            url += `&tag=${tag}`;
        }
        if (category) {
            url += `&category=${category}`;
        }

        try {
            const response = await fetch(url);
            const data = await response.json();
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
    }, []);

    function handlePageChange(page) {
        navigate({ search: `?page=${page}` })
        setPage(page);
    }

    function toggleTheme() {
        setTheme((prevTheme) => {
            const newTheme = !prevTheme;
            localStorage.setItem("theme", newTheme ? "dark" : "light");
            document.body.classList.toggle('dark', newTheme);
            return newTheme;
        });
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
        theme,
        toggleTheme,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}