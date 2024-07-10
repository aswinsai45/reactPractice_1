import React, {useState} from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {BsFillSaveFill} from 'react-icons/bs'


const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/*left side*/}
        <div className='flex items-center'>
            <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={30} />
            </div>
            <h1 className='text-2xl sm: text-3xl lg:text-4xl px-2'>
                Best <span className='font-bold'>Eats</span>
            </h1>
 
            <div className='hidden lg:flex items-center bg-gray-100 rounded-full p-[6px] text-[15px]'>
                <p className='bg-black text-white rounded-full p-1'>Delivery</p>
                <p className='p-1'>Pickup</p>
            </div>
        </div>

        {/*search input*/}

        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size = {25}/>
            <input className='bg-transparent p-2 focus:outline-none' type="text" placeholder='Search foods' />
        </div>

        {/*cart symbol*/}

        <button className='flex items-center border border-black p-2 rounded-full'>
            <AiOutlineShoppingCart size={25} className='mr-2'/> Cart
        </button>


        {/*mobile menu */}
        {/*OVERLAY */}

        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
            </div> : ''}
         {/*OVERLAY only*/}

        {/*SIDE DRAWER MENU ITEMS */}

        <div className= {nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
            <AiOutlineClose onClick={()=>setNav(!nav)} size={25} className='absolute right-4 top-4 cursor-pointer' />
            <h2 className='text-2xl p-4'>Best
                <span className='font-bold'>Eats</span></h2>

            <nav>
                <ul className='flex flex-col p-4'>
                    <li className='text-xl flex py-4'><TbTruckDelivery size={25} className='mr-4' />Orders</li>
                    <li className='text-xl flex py-4'><MdFavorite  size={25} className='mr-4' />Favorites</li>
                    <li className='text-xl flex py-4'><FaWallet size={25} className='mr-4' />Wallet</li>
                    <li className='text-xl flex py-4'><MdHelp size={25} className='mr-4' />Help</li>
                    <li className='text-xl flex py-4'><AiFillTag size={25} className='mr-4' />Promotions</li>
                    <li className='text-xl flex py-4'><BsFillSaveFill size={25} className='mr-4' />Best Ones</li>
                    <li className='text-xl flex py-4'><FaUserFriends size={25} className='mr-4' />Invite</li>

                </ul>
            </nav>
        </div>

    </div>
  )
}

export default Navbar