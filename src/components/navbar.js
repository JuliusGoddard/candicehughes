import React from 'react'
import Logo from '../images/logo.jpg'

const Navbar = () => {

    return (
        <div className="flex justify-between items-center bg-gray-900 fixed inset-x-0 z-40">
            <div className="">
            <img className="w-40 px-2 mt-6" src={Logo}></img>
            </div>
            <div className="flex flex-row items-center justify-center">
                <a href="#bio" className="px-4 text-white hover:text-red-700 hover:text-lg">About</a>
                <a href="#books" className="px-4 text-white hover:text-red-700 hover:text-lg">Books</a>
                <a href="#videos" className="px-4 text-white hover:text-red-700 hover:text-lg">Videos</a>
                <a href="#links" className="px-4 text-white hover:text-red-700 hover:text-lg">Learn More</a>
            </div>
        </div>
    )
}

export default Navbar