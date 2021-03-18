import React from 'react'
import Layout from './components/layout'
import Videosection from "./components/videosections"
import Landingscreen from "./components/landingscreen"
function App () {
  return (
    <Layout>
      <Landingscreen />
      <Videosection header="Popular on Netflix" id="popular"/>
      <Videosection header="Trending Now"  id="trending"/>
      <Videosection header="TV Shows"  id="tv"/>
      <Videosection header="Blockbuster Action &amp; Adventure" id="blockbuster"/>
      <Videosection header="Netflix Originals" id="originals"/>
    </Layout>
  )
}
export default App;