import { assets } from "../assets/assets"
import { useNavigate } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";

export function Hero() {
    const navigate = useNavigate()
    const rightArrow = <GoArrowRight/>
    return (
        <div className="mx-4 sm:mx-[5%] py-10">
            <div className="bg-white rounded-lg grid lg:grid-cols-12 px-4 py-4">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-xl  text-gray-900 mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">Worlds No.1 Payment App</h1>
                    <p className="max-w-2xl mb-6 font-semibold text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Pay From Anywhere</p>
                    
                    <button onClick={() => navigate('/signup')}
                        className="bg-blue-600 text-white text-xl font-bold px-5 py-2 w-full lg:max-w-xs rounded-sm flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200">
                        Get Started {rightArrow}
                    </button>
                    
                </div>
                <div className="hidden lg:col-span-5 lg:flex">
                    <img src={assets.hero}></img>
                </div>
                    
            </div>
           
        </div>
    )
}


