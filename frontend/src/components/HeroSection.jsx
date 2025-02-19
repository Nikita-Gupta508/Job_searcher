import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center my-10  '>
            <div className='flex flex-col items-center justify-center gap-5 mt-10 '>
                <span className='   mt-5 mx-auto px-4 py-2 rounded-full bg-sky-300 text-[#050b16] font-medium'>Unlock Your Dream Career Today !</span>
                <h1 className='text-5xl font-bold'>Jobs, Opportunities <br /> & Success <span className='text-[#2da0ce]'>Await You!</span></h1>
                <p className=' mx-auto px-4 py-2 mt-4 rounded-full bg-sky-300 text-[#050b16] font-medium'>Empowering your career journey with the best job opportunities, right at your fingertips.</p>
                <br></br>
                {/* <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-blue-600 hover:bg-blue-800">
                        <Search className='h-5 w-5' />
                    </Button>
                </div> */}
            </div>
        </div>
    )
}

export default HeroSection