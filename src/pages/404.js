import React from 'react'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'
import Head from '../components/head'

const NotFound = () => {

    return (
        <div className="flex bg-black h-screen">
<Head title="404" />
    <Navbar />
    <div className="m-auto">
    <h1 className="text-white">Page Not Found</h1>
    <h2 className="text-white text-center hover:text-red-900"><Link to='/'>Go back to homepage</Link></h2>
    </div>

        </div>
    )
}

export default NotFound