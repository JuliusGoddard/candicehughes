import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'
import * as footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
          website
        }
      }
    }
    `
    )
    return (
        <footer className={footerStyles.footer}>
            <p>Created by <Link to={data.site.siteMetadata.website}>{data.site.siteMetadata.author}</Link> Copyright 2022</p>
        </footer>
    )
}

export default Footer