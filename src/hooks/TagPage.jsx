import { useLocation, useNavigate } from "react-router";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function TagPage(){

    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    const {theme} = useContext(AppContext);

    return(
        <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
            <Header/>
            <div className='w-11/12  max-w-[670px] pt-8 flex flex-col justify-start items-start gap-y-4 mt-[4.2rem] mb-4 flex-wrap '>
                <button className={`border-2 py-1 px-3 rounded-md  flex border-slate-300 ${theme?'border-slate-600':''}`}
                onClick={()=> navigate(-1)}
                >
                    <FaArrowLeftLong /> 
                </button>

                <h2 className="font-bold text-xl ">
                    Blogs Tagged <span className="text-blue-600 underline">#{tag}</span>
                </h2>
            </div>
            <Blogs/>
            <Pagination/>
        </div>
    );
}