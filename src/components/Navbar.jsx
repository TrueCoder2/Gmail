import React, {useState , useEffect} from 'react'
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineTune } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import Avatar from 'react-avatar';
import { RxHamburgerMenu } from "react-icons/rx";
import { setSearchText } from '../redux/slice';
import { useSelector , useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/slice';
import { motion ,AnimatePresence } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';


const Navbar = () => {
    const [search, setSearch] = useState("");
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();
    const { authUser } = useSelector(store => store.app);

    const signOutHandler = () => {
      signOut(auth).then(() => {
        dispatch(setAuthUser(null));
      }).catch((error) => {
        console.log(error);
      });
    }

    useEffect(() => {
      dispatch(setSearchText(search));
    }, [search]);
  

  return (
    <div className='flex items-center justify-between mx-3 h-16 bg-[#f6f8fc] '>
      <div className='flex items-center gap-10'>
        <div className='flex items-center gap-2'>
          <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
            <RxHamburgerMenu size={'20px'} />
          </div>
          <img className='w-8' src={"https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"} alt="" />
          <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
        </div>
      </div>
      <div className='md:block hidden w-[60%] ml-40 mr-60'>
        <div className='flex items-center bg-[#EAF1FB] px-2 py-3  rounded-full'>
          <IoIosSearch size="24px" className='text-gray-700 font-bold' />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search mail'
            className='rounded-full w-full bg-transparent outline-none px-1'
          />
        <MdOutlineTune size="24px" className='text-gray-700 font-bold' />
        </div>
      </div>
      <div className='md:block hidden'>
        <div className='flex items-center '>
          <div className='p-3 rounded-full text-gray-500 hover:bg-gray-100 cursor-pointer'>
            <FaRegQuestionCircle size={"20px"} />
          </div>
          <div className='p-3 rounded-full text-gray-500 hover:bg-gray-100 cursor-pointer'>
            <MdOutlineSettings size={"24px"} />
          </div>
          <div className='p-3 rounded-full text-gray-500 hover:bg-gray-100 cursor-pointer'>
            <PiDotsNineBold size={"24px"} />
          </div>
          
          <div className='relative cursor-pointer'>
            <Avatar onClick={() => setToggle(!toggle)} src={authUser?.photoURL} size="40" round={true} />
            <AnimatePresence>
              {
                toggle && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.1 }}
                    className='absolute right-1 z-20 shadow-lg bg-white rounded-md'>
                    <p onClick={signOutHandler} className='p-4 font-medium text-xl'>LogOut</p>
                  </motion.div>
                )
              }
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar