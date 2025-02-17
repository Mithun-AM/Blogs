import { NavLink } from "react-router-dom";

export default function BlogDetails({ post }) {
    return (
        <div className="w-full p-3 flex flex-col gap-y-1">

            <NavLink to={`/blog/${post.id}`}>
                <span className="font-bold text-lg hover:text-light-accent dark:hover:text-dark-accent">{post.title}</span>
            </NavLink>

            <div className="text-[0.89rem]">
                <p>
                    By
                    <span className="italic text-light-secondaryText dark:text-dark-secondaryText"> {post.author} </span>
                    on {" "}
                    <NavLink to={`/categories/${post?.category?.replaceAll(" ", "-")}`} className="hover:text-light-accent dark:hover:text-dark-accent">
                        <span className="underline font-semibold ">{post.category}</span>
                    </NavLink>
                </p>
                <p>
                    Posted On {post.date}
                </p>
            </div>

            <p className="mt-2 text-light-secondaryText dark:text-dark-secondaryText">
                {post.content}
            </p>

            <div className="flex flex-row flex-wrap gap-x-2 text-xs mt-1 text-light-accent font-semibold underline">
                {post?.tags?.map((tag, index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`} className="hover:text-blue-500 dark:text-dark-accent dark:hover:text-blue-500">
                        <span>{`#${tag}`}</span>
                    </NavLink>
                )) || <span>No tags available.</span>}
            </div>

        </div>
    );
}

