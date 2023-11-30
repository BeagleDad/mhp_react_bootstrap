import * as React from "react"

import Seo from "../components/seo"
import { Carousel, Container } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Header from "../components/header"



const IndexPage = () => (
  
  
    <Container fluid >
      <Header />
      <Carousel >
          <Carousel.Item>
            <StaticImage src="../images/photos/LorraineCt_2640.jpg"  alt=""/>
            <Carousel.Caption as={Link} to="/sevice-property"  className="text-decoration-none">Property Services</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage src="../images/photos/LorraineCt_2564_mls_01.jpg"  alt=""/>
            <Carousel.Caption as={Link} to="/service-property" className="text-decoration-none">Property Services</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage src="../images/photos/DJI_0012proplines.JPG"  alt=""/>
            <Carousel.Caption  as={Link} to="/service-aerial" className="text-decoration-none">Aerial Services</Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage src="../images/photos/D85_4753_VS.jpg"  alt=""/>
            <Carousel.Caption as={Link} to="/service-staging" className="text-decoration-none">Virtual Staging</Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </Container>
  
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => {
  return (
    <>
      <Seo title="Home" />
      <html lang="en" data-bs-theme="dark"  />
    </>
  )
}
export default IndexPage
