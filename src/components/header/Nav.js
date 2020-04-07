import styled from "styled-components"
import React from "react"
import NavLinkListItem from "../header/NavLinkListItem"
import { Link } from "gatsby"
import { breakpoint } from "../../utils/breakpoints"
import BurgerButton from "./BurgerButton"
import NavLinkList from "./NavLinkList"

const Nav = ({ isMenuExpanded, setIsMenuExpanded }) => {
  return (
    <NavWrapper>
      <BurgerButton
        isMenuExpanded={isMenuExpanded}
        setIsMenuExpanded={setIsMenuExpanded}
      />
      <NavLinkList isMenuExpanded={isMenuExpanded}>
        <NavLinkListItem>
          <Link to="/projects" activeClassName="active" partiallyActive={true}>Projects</Link>
        </NavLinkListItem>
        <NavLinkListItem>
          <Link to="/about-me" activeClassName="active">About</Link>
        </NavLinkListItem>
        <NavLinkListItem>
          <Link to="/blog" activeClassName="active" partiallyActive={true}>Blog</Link>
        </NavLinkListItem>
        <NavLinkListItem>
          <Link to="/#contact" activeClassName="active">Contact</Link>
        </NavLinkListItem>
      </NavLinkList>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  height: 100%;
  ${breakpoint.md`
  width: 60%;`}
`

export default Nav
