import { NavLink } from "react-router-dom";

export default function BlogDetails({ post }) {
    return (
        <div className="w-full p-3 flex flex-col gap-y-1 hover:shadow-lg">

            <NavLink to={`/blog/${post.id}`}>
                <span className="font-bold text-lg">{post.title}</span>
            </NavLink>

            <div className="text-[0.89rem]">
                <p>
                    By
                    <span className="italic"> {post.author} </span>
                    on {" "}
                    <NavLink to={`/categories/${post?.category?.replaceAll(" ", "-")}`}>
                        <span className="underline font-semibold">{post.category}</span>
                    </NavLink>
                </p>
                <p>
                    Posted On {post.date}
                </p>
            </div>

            <p className="mt-2">
                {post.content}
            </p>

            <div className="flex flex-row flex-wrap gap-x-2 text-xs mt-1 text-blue-600 font-semibold underline">
                {post?.tags?.map((tag, index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                        <span>{`#${tag}`}</span>
                    </NavLink>
                )) || <span>No tags available.</span>}
            </div>

        </div>
    );
}

