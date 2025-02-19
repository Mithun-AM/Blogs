import Home from "./hooks/Home"
import BlogPage from "./hooks/BlogPage"
import CategoryPage from "./hooks/CategoryPage"
import TagPage from "./hooks/TagPage"
import { useContext, useEffect,useMemo } from 'react';
import { AppContext } from './context/AppContext';
import { Routes,Route, useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';

export default function App(){

  const {fetchBlogPost} = useContext(AppContext);

  const [searchParams] = useSearchParams();
  const location = useLocation();

  const page = useMemo(() => searchParams.get("page") ?? 1, [searchParams]);

  useEffect(()=>{
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPost(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPost(Number(page),null,category);
    }else{
      fetchBlogPost(Number(page));
    }

  },[fetchBlogPost, location.pathname, location.search, page]);

  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog/:blogId" element={<BlogPage/>} />
      <Route path="/tags/:tag" element={<TagPage/>} />
      <Route path="/categories/:category" element={<CategoryPage/>} />
    </Routes>
  );
}