import React, { useState } from "react"
import Header from "../header/Header"
import Main from "../ui/Main"
import HeadingFont from "../../../static/assets/fonts/BC-Falster-Grotesk-Regular.woff2"
import BodyFont from "../../../static/assets/fonts/robotomono-regular-webfont.woff2"
import { Helmet } from "react-helmet"
import "../../styles/reboot.css"
import "../../styles/typography.css"

const Layout = ({ children }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="font"
          href={HeadingFont}
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href={BodyFont}
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <title>Emma Boardman: Front-End & UX Development</title>
      </Helmet>
      <Header
        isMenuExpanded={isMenuExpanded}
        setIsMenuExpanded={setIsMenuExpanded}
      />

      <Main>{children}</Main>
      <footer>© 2020 Emma Boardman</footer>
    </>
  )
}

export default Layout
