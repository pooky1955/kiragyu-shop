import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {useStaticQuery,graphql} from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from '@material-ui/core/styles'
import NavBar from './NavBar'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyle = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: '960',
    padding: '1.45rem 1.0875rem',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : "1rem"
  },
  title: {
    textDecoration: `none`,
    zIndex: '1',
    fontFamily: "inspiratiq, monospace",
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginBottom : "0.5rem",
  },
  linkStyle: {
    color: '#FFA634',
    textDecoration: "none"
  },
  navBar: {
    marginTop: '1rem',
    marginBottom: '2rem',
  },
  inspiratiq: props => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: props.marginBottom,
    marginTop: props.marginTop
  }),
  rightCloud: {
    filter: 'brightness(200%)',
    zIndex: '-1',
    width: '10rem',
    transform: 'translate(-10%, 20%)',
  },
  leftCloud: {
    filter: 'brightness(200%)',
    width: '10rem',
    zIndex: '-1',
    transform: 'translate(0, 20%)',
  },
  "@keyframes shake" : {
    from : {transform : "rotate(-5deg)"},
    to : {transform : "rotate(5deg)"},
  },
  icon : {
    animation : "$shake 2s infinite alternate cubic-bezier(0.37, 0, 0.63, 1)"
  }
})


const imagesQuery = graphql`
  query HeadersQuery {
    personImage : file(relativePath : {eq : "logo.png"}) {
      id
      name
      childImageSharp {
	fixed(width : 200,height : 200){
	  ...GatsbyImageSharpFixed_withWebp_tracedSVG
	}
      }
    }
  }
`
const Header = ({ siteTitle }) => {
  let props
  //const phoneMatches = useMediaQuery('(min-width: 800px)')
  const phoneMatches = true
  const data = useStaticQuery(imagesQuery)
  //alert(JSON.stringify(data))
  const fluidLogo = data.personImage.childImageSharp.fixed
  if (phoneMatches){
    props = {
      marginTop: "0rem",
      marginBottom: "0rem"
    }
  }
  else{
    props = {
      marginTop: "1rem",
      marginBottom: "2rem"
    }
  }
  const classes = useStyle(props)
  return (
    <div className={classes.container}>
      
      <Img className={classes.icon} durationFadeIn={0}  fixed={fluidLogo} alt="" height="220px"></Img>
      <div className={classes.titleContainer}>
        <div className={classes.inspiratiq}>
          <div className={classes.title}>
            {' '}
              <Link to="/" className={classes.linkStyle}>{siteTitle}</Link>
          </div>
        </div>
        <div className={classes.navBar}>
          <NavBar />
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
