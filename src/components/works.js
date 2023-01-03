import React from 'react'
import deadevil from '../images/deadevil.jpg'
import Deathonathinhorse from '../images/Deathonathinhorse.jpg'

const Works = () => {

return (
<div id="books" className="bg-black">
    <h1 className="text-white py-10 text-center">Works</h1>
<div className="md:flex m-auto justify-around">
    <div><p className="text-white text-2xl  max-w-xl px-8 py-4 text-justify">When Hope Howland, forensic artist and archeologist, uncovers the bones of a child in her aunt’s yard, she must face the fact that someone in her close-knit, Mayflower-descended family is a murderer. She is drawn into an investigation by Gabe Bennett, a Southern police detective planted in the heart of Yankee territory after a tense divorce. A trail of dead bodies points to prime suspects: Hope, her business woman grandmother and her sex-obsessed cousin. Rumors of witchcraft, demons and curses swirl around the family. As Hope loses her heart to Gabe, she must fight to make sense of a crumbling world where no one is what they seem, including herself. Will she choose family loyalty or freeing the world of evil while destroying the only family she has left?</p></div>
    <div>
<img className="mx-auto" src={deadevil}></img>
<a target="_blank" href="https://www.amazon.com/Dead-Evil-Candice-M-Hughes/dp/1491054751/ref=sr_1_1?crid=29PJA0VBGZ87L&keywords=candice+m.+hughes&qid=1655480414&sprefix=candice+m.+hughes%2Caps%2C86&sr=8-1" class="flex items-center justify-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-10 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Buy Now</a>
    </div>
</div>
<div className="md:flex m-auto justify-around px-4 py-4">
<div ><img className="mx-auto" src={Deathonathinhorse}></img>
<a target="_blank" href="https://www.amazon.com/Death-Thin-Horse-Candice-Hughes/dp/1479299855/ref=sr_1_3?crid=29PJA0VBGZ87L&keywords=candice+m.+hughes&qid=1655483148&sprefix=candice+m.+hughes%2Caps%2C86&sr=8-3" class="flex items-center justify-center mx-auto focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-10 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Buy Now</a>
</div>
    <div><p className="text-white text-2xl px-8 py-4 max-w-xl text-justify">Baltimore City, the United Major States: Senator Cutter ("The Prophet"), follower of Protestant Reformer Martin Luther, founder of an Evangelical Christian church and a Presidential candidate, orders the release of a weaponized virus onto a city street. Boston, the Outlands: biogeneticist, Meara Flannagan, cures an SIV infected Rhesus monkey with a biotherapy that rewrites DNA in minutes. When her Corp reassigns the drug to her nemesis, Meara steals the formula and flees to the outlaw territories. Sebastian Gates is a saxophone player and hired gun ordered to hunt her. Success is assured until he realizes the job comes with complications. Complications like an attraction to Meara and evasion of a laser-toting assassin who can look like Jackie Onassis one day and Jackie Chan the next. The Senator, Meara and Sebastian are on a collision course- unwitting players in a zero sum game where China and India will destroy anything and anyone in their path to possess what remains of the former United States. Meara and Sebastian are the only hope- for each other and for their country.</p></div>
   
</div>
</div>
)
}

export default Works