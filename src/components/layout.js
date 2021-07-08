import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} {''}
       <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/cerensayar97"> Behance</a> | <a target='_blank' rel="noopener noreferrer"  href="https://www.linkedin.com/in/cerensayar/">LinkedIn</a>

</p>
      </footer>
    </div>
  )
}
