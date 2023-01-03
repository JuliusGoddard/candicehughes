import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as splashStyles from './splash.module.scss'


const Splash = () => {

    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
    `
    )
    return (
        <div className="flex h-screen bg-[url('../images/cover2.jpg')] bg-cover bg-no-repeat ">
            <div className="m-auto">
  <h1 className={splashStyles.fadein}>{data.site.siteMetadata.title}</h1>
  <h2 className="text-center text-white">Writer, Author, Poet</h2>
  </div>
        </div>
    )
}

export default Splash