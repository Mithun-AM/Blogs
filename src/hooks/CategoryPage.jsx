import { useLocation, useNavigate } from "react-router";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function CategoryPage() {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
            <Header />
            <div className='w-10/12  max-w-[670px] pt-8 flex flex-col flex-wrap items-start justify-start gap-y-4 mt-[4.2rem] mb-4'>
                <div className="border-2 py-1 px-3 rounded-md flex">
                    
                    <button onClick={() => navigation(-1)}><FaArrowLeftLong /></button>
                </div>

                <h2 className="font-bold text-xl ">
                    Blogs On <span className="underline">{category.replaceAll("-"," ")}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    );
}