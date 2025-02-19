import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";
export default function Blogs() {

    const { posts, loading } = useContext(AppContext)

    return (
        <div className="w-11/12 max-w-[670px] h-full flex justify-center items-center text-left flex-col  mb-[5.5rem] gap-y-6">
            {
                loading ?
                    (<div className="w-full fixed top-0 bottom-0 flex justify-center items-center ">
                        <Spinner />
                    </div>) :
                    (
                        posts.length === 0 ?
                            (
                                <div className="w-full h-full flex justify-center items-center p-4 mt-32 text-xl font-bold">
                                    <p>
                                        No Blogs Found
                                    </p>
                                </div>
                            ) :
                            (
                                posts.map((post) => (
                                    <BlogDetails post={post} key={post.id}/>
                                ))
                            )
                    )
            }
        </div>
    );
}
