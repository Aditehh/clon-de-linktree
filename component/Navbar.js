import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-white flex fixed justify-between p-4 w-[80vw] top-10 right-[10vw] rounded-full '>
            <div className="cursor-pointer text-3xl logo font-bold flex gap-20 items-center">
                LinkTree

                <ul className=' flex text-lg font-normal gap-7'>
                    <li>Templates</li>
                    <li>Marketplace</li>
                    <li>Discover</li>
                    <li>Pricing</li>
                    <li>Learn</li>
                </ul>
            </div>

            <div className='flex gap-5'> 
               <button className="login bg-gray-300 rounded-lg font-bold p-4">Log In</button>
               <button className="signup text-white bg-black px-5 rounded-full py-1 font-bold">Sign up Free</button>
            </div>
        </nav>
    )
}

export default Navbar
