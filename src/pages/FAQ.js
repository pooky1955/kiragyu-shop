import React from 'react'
import Layout from '../components/layout'
import { makeStyles } from '@material-ui/core/styles'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
const useStyle = makeStyles(theme => {
  return {
    pageTitle: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '3rem',
      color: '#F88A17',
      lineHeight: '3.5rem',
      // color: theme.palette.secondary.main
    },
    category: {
      fontFamily: 'Inspiratiq, monospace',
      fontSize: '2.5rem',
    },
    question: {
      fontWeight: 'bold',
      marginBottom: '1rem',
      fontSize: '1.1rem',
    },
    answer: {
      textIndent: '1rem',
    },

    email: {
      // color: "#FFF",
      fontWeight: '700',
    },
    FAQ: {
      '& h1': {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '3rem',
        color: '#F88A17',
        lineHeight: '3.5rem',
      },
      '& h2': {
        fontWeight: 'bold',
        fontFamily: 'inspiratiq',
        fontSize: '3rem',
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: '2rem',
        maxWidth: '30rem',
        color: '#F88A17',
      },
      '& h3': {
        fontFamily: 'Fira Code',
        color: '#FC9C74',
      },
      '& a': {
        color: 'inherit',
      },
    },
  }
})
export const FAQ = ({ data }) => {
  const classes = useStyle()
  const { mdx } = data
  return (
    <Layout>
      <div className={classes.FAQ}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    mdx(frontmatter: { title: { eq: "FAQ" } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
export default FAQ
