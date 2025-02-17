import { useContext, useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";
import { baseUrl2 } from "../baseUrl";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import BlogDetails from "../components/BlogDetails";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function BlogPage() {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading } = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    const fetchRelatedBlogs = useCallback(async () => {
        setLoading(true);
        let url = `${baseUrl2}?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.log("Error fetching data", error);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }, [blogId, setLoading]);

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [blogId, fetchRelatedBlogs]);

    return (
        <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
            <Header />
            <div className="w-11/12 max-w-[670px] h-full flex justify-center items-center text-left flex-col mt-[6.2rem] mb-[5.5rem] gap-y-2">
                <div className="border-2 py-1 px-3 rounded-md self-start flex text-light-secondaryText hover:text-light-text dark:text-dark-secondaryText dark:hover:text-dark-text border-light-buttonBg hover:border-light-buttonHover dark:border-dark-buttonBg hover:dark:border-dark-buttonHover" >
                    <button onClick={() => navigation(-1)}><FaArrowLeftLong /> </button>
                </div>
                <div >
                    {
                        loading ?
                            (<div className="fixed top-0 bottom-0 flex justify-center items-center">
                                <Spinner />
                            </div>) :
                            blog ?
                                (
                                    <div className="flex flex-col gap-y-5">
                                        <div className="mt-3">
                                            <BlogDetails post={blog} />
                                        </div>
                                        <h2 className="font-bold text-3xl mt-7">Related Blogs</h2>
                                        {
                                            relatedBlogs.map((post) => (
                                                <div key={post.id}>
                                                    <BlogDetails post={post} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                ) :
                                (
                                    <div>
                                        <p>No Blog Found</p>
                                    </div>
                                )
                    }
                </div>
            </div>
        </div>
    );
}
