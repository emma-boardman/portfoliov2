import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/ui/layout"
import Main from "../../components/ui/Main"
import Section from "../../components/ui/Section"
import PagesIndex from "../../components/ui/PagesIndex"


export default ({ data }) => {
  return (
    <Layout>
      <Main>
        <Section>
          <h1>Project List</h1>
          <PagesIndex>
            {data.allProjectsJson.edges.map(({ node }) => (
              <li key={node.id}>
                <h2>
                  <a href={`/projects/${node.slug}`}>{node.title}</a>
                </h2>
              </li>
            ))}
          </PagesIndex>
        </Section>
      </Main>
    </Layout>
  )
}



export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          slug
          title
          overviewtldr
          overview
          ux
          a11y
          result
        }
      }
    }
  }
`
