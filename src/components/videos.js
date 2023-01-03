import React from 'react'

const Videos = () => {

    return (
        <div id="videos" className="bg-gray-900 py-10">
            <h1 class="text-white text-center py-10">Videos</h1>
        <iframe className="mx-auto w-1/2 h-96"
src="https://www.youtube.com/embed/eQ43I9rmJQM">
</iframe>
<iframe className="mx-auto w-1/2 h-96"
src="https://www.youtube.com/embed/uOfURqOR0I4">
</iframe>
<iframe className="w-1/2 h-96 mx-auto" 
src="https://www.youtube.com/embed/azUBXQ-7rc8">
</iframe>
        </div>
    )
}

export default Videos