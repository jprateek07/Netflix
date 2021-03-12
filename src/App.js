import React from 'react'
import Layout from './components/layout'
import Videosection from "./components/videosections"
import Landingscreen from "./components/landingscreen"
function App () {
  return (
    <Layout>
      <Landingscreen />
      <Videosection />
    </Layout>
  )
}
export default App;