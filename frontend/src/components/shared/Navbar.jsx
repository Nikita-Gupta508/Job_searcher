import React, { useState, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation(); // Get the current route

    const [activeStatus, setActiveStatus] = useState(location.pathname);

    // Update activeStatus when the route changes
    useEffect(() => {
        setActiveStatus(location.pathname);
    }, [location.pathname]);

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className='bg-sky-300'>
            <div className=' px-8 flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div onClick={()=>navigate('/')}  className=' cursor-pointer'>
                    <h1 className='text-2xl font-bold text-blue-800'>Hire<span className='text-gray-800'>Hub</span></h1>
                </div>

                <div className=' flex items-center justify-center'>
                    <ul className='flex font-medium items-center gap-5'>
                        {user && user.role === 'recruiter' ? (
                            <>
                                <li
                                    onClick={() => setActiveStatus("/admin/companies")}
                                >    <div className=' flex flex-col w-fit'>
                                         <Link to="/admin/companies" className=' hover:text-blue-700 duration-150'>Companies</Link>
                                         {
                                             activeStatus === '/admin/companies' &&  <div className=' h-[3px] w-full bg-black'> </div>
                                         }

                                    </div>
                                    
                                </li>
                                <li
                                    onClick={() => setActiveStatus("/admin/jobs")}
                                >
                                     <div className=' flex flex-col w-fit'>
                                         <Link to="/admin/jobs" className=' hover:text-blue-700 duration-150'>Jobs</Link>
                                         {
                                             activeStatus === '/admin/jobs' &&  <div className=' h-[3px] w-full bg-black'> </div>
                                         }
                                     </div>
                                   
                                </li>
                            </>
                        ) : (
                            <>
                                <li  onClick={() => setActiveStatus("/")}
                                >   <div className=' flex flex-col w-fit'>
                                         <Link to="/" className=' hover:text-blue-700 duration-150'>Home</Link>
                                         {
                                             activeStatus === '/' &&  <div className=' h-[3px] w-full bg-black'> </div>
                                         }
                                    </div>
                                </li>
                                <li
                                    onClick={() => setActiveStatus("/jobs")}
                                    
                                >       <div  className='  flex flex-col w-fit'>
                                            <Link to="/jobs" className=' hover:text-blue-700 duration-150'>Jobs</Link>
                                            {
                                             activeStatus === '/jobs' &&  <div className=' h-[3px] w-full bg-black'> </div>
                                         }
                                         </div>
                                    
                                </li>
                                <li
                                    onClick={() => setActiveStatus("/browse")}
                                   
                                >    <div className='  flex flex-col w-fit'>
                                                    <Link to="/browse" className=' hover:text-blue-700 duration-150'>Browse</Link>
                                                    {
                                                    activeStatus === '/browse' &&  <div className=' h-[3px] w-full bg-black'> </div>
                                         }
                                       </div >
                                    
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                <div className='flex items-center gap-12'>
                    {!user ? (
                        <div className='flex items-center gap-2'>
                            <Link to="/login"><Button className="bg-blue-600 hover:bg-blue-800">Login</Button></Link>
                            <Link to="/signup"><Button className="bg-blue-600 hover:bg-blue-800">Signup</Button></Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div>
                                    <div className='flex gap-2 space-y-2'>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-medium'>{user?.fullname}</h4>
                                            <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col my-2 text-gray-600'>
                                        {user && user.role === 'student' && (
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <User2 />
                                                <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                                            </div>
                                        )}

                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut />
                                            <Button onClick={logoutHandler} variant="link">Logout</Button>
                                        </div>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
