import styled from "styled-components"
import React from "react"
import { breakpoint } from "../../utils/breakpoints"
import ProjectNav from "../../components/projects/ProjectNav"
import ProjectTitle from "../../components/projects/ProjectTitle"

const ProjectFixedHeader = ({ title, isOverviewInViewPort, isUXInViewPort, isA11yInViewPort, isResultInViewPort }) => {
  return (
    <ProjectFixedHeaderWrapper>
      <ProjectTitle title={title} />
      <ProjectNav
        isOverviewInViewPort={isOverviewInViewPort}
        isUXInViewPort={isUXInViewPort}
        isA11yInViewPort={isA11yInViewPort}
        isResultInViewPort={isResultInViewPort}
      />
    </ProjectFixedHeaderWrapper>
  )
}

const ProjectFixedHeaderWrapper = styled.div`
  position: fixed;
  top: 15vh;
  height: 16vh;
  left: 0;
  width: 100%;
`

export default ProjectFixedHeader
