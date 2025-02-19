import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {//jaise hi home render hoga ye shift kar dega kisi aur page p
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
      <Navbar />
        <div className='flex flex-col'>
              <div className=' flex flex-col bg-[url(./assets/back_ground.jpg)] bg-center bg-cover bg-no-repeat'>
                  <HeroSection />
                  <CategoryCarousel />
              </div>
                
          </div>
          <LatestJobs />
      <Footer />
    </div>
  )
}

export default Home