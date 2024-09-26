import { MdOutlineMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ImCross } from "react-icons/im";


function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const Hamburger = <MdOutlineMenu className="HamburgerMenu"
        size="30px" color="black" /> 
    const crossIcon = <ImCross/>
    return (
        <div className="border-b sticky top-0 z-50 bg-slate-50">
        <div className="mx-4 sm:mx-[5%] h-20 flex justify-between items-center ">
            <div className='flex gap-3 md:gap-0'>
                    <div onClick={() => setShowMenu(true)} className='flex md:hidden'>{Hamburger}</div>
                    {/* ------------------------------------------------------------------------------------- */}
                    <div className={`${showMenu ? 'fixed w-full': 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6' onClick={()=>setShowMenu(false)}>
                        
                        {crossIcon}
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} to='/'><p className="px-4 py-2 rounded inline-block">HOME</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about'><p className="px-4 py-2 rounded inline-block">ABOUT</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className="px-4 py-2 rounded inline-block">CONTACT</p></NavLink>
                    </ul>

                </div>

                    {/* ------------------------------------------------------------------------------------- */}
                    <NavLink to='/'>
                            <div className='text-2xl font-bold '><span className='text-blue-900'>Payz</span><span className='text-blue-400'>Pay</span></div>                
                    </NavLink>
            </div>
            <div className="hidden md:flex" >
                <ul className="flex gap-10 font-semibold cursor-pointer">
                    <NavLink to='/' ><li onClick={()=>{scrollTo(0,0)}} className="hover:bg-slate-100 px-2 py-2 rounded-sm">Home</li></NavLink>
                    <NavLink to='/about'><li className="hover:bg-slate-100 px-2 py-2 rounded-sm">About</li></NavLink>
                    <NavLink to='/contact'><li className="hover:bg-slate-100 px-2 py-2 rounded-sm">Contact</li></NavLink>
                </ul>
            </div>
                <NavLink to='signin'>
                    <button onClick={()=>{scrollTo(0,0)}} className="border-2 text-white font-semibold rounded-full px-4 py-1  bg-gradient-to-r from-indigo-500 to-purple-500 hover:border-blue-900">Sign In</button>
                </NavLink>
        </div>
        </div>
    )
}

export default Navbar
