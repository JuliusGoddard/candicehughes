import React from 'react'
import Candice from '../images/Candice.jpg'

const Bio = () => {

    return (
        <div id="bio" className="md:flex py-10 justify-around bg-gray-900">
            <div className="m-auto">
<img src={Candice}></img>
            </div>
            <div className="m-auto max-w-lg px-4 text-white text-2xl whitespace-pre-wrap break-words text-justify">
<p>Candice M. Hughes is an award-winning poet and essayist. She has authored a wide variety of creative and nonfiction works. Her debut technothriller was Death on a Thin Horse. Her second novel is Dead Evil, a paranormal thriller with an intriguing romance.</p>
<p>She is published in The Allegheny Review, The Lyon Review, and Pegasus among others. She is a recipient of the Ida F. Snell Poetry Prize and a Pen Works Honorable Mention for Creative Nonfiction. Other books include the Small Business Rocket Fuel nonfiction series</p>
<p>Candice is also biotech consultant and formerly a professional medical writer. She holds a PhD in Anatomy and Neurobiology from Boston University School of Medicine and an MBA with a focus on strategy and technology innovation. She is passionate about health-focused technology commercialization.</p>
            </div>
        </div>
    )
}

export default Bio