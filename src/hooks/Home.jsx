import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

export default function Home() {
    return (
        <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
            <Header />
            <div className='w-full flex flex-col justify-center items-center mt-[5rem]'>
                <Blogs />
                <Pagination />
            </div>
        </div>
    );
}