import React from "react"
import PropTypes from "prop-types"
import SkillRectangle from "./SkillRectangle"
import styled from "styled-components"
import { breakpoint } from "../../utils/breakpoints"

const SkillsStack = ({ skills, color }) => {
  return (
    <SkillsStackWrapper color={color}>
      {skills.map((skill, index) => (
        <SkillRectangle key={index} skill={skill}></SkillRectangle>
      ))}
    </SkillsStackWrapper>
  )
}

SkillsStack.propTypes = {
  skills: PropTypes.array.isRequired,
}

const SkillsStackWrapper = styled.div`
  ${breakpoint.md`
  display: inline-block;`}
  div {
    position: relative;
    :nth-child(1) {
      z-index: 3;
      margin-bottom: -10%;
    }
    :nth-child(2) {
      z-index: 2;
      margin-bottom: -10%;
    }
    :nth-child(3) {
      z-index: 1;
    }
  }

  g {
    fill: ${props => props.color};
  }
`

export default SkillsStack
