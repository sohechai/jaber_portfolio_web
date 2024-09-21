import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
 display: "flex",
 justifyContent: "center",
 alignItems: "center",
 height: "100vh",
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 >404 not found</h1>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
