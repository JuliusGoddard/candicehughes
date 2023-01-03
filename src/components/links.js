import React from 'react'

const Links = () => {
    return (
        <div>
        <div id="links" className="bg-black flex flex-col py-10">
            <h1 className="py-10 text-white mx-auto">Learn More</h1>
<a href="https://www.goodreads.com/author/show/5028511.Candice_M_Hughes" class="max-w-md mx-auto focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-10 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" target="_blank">Goodreads</a>
</div>
<div className="bg-black flex flex-col py-10">
<a href="https://www.facebook.com/CandiceMHughesAuthor/" type="button" class="max-w-md mx-auto focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-lg px-10 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" target="_blank">Facebook</a>
    </div>
    </div>
    )
}

export default Links