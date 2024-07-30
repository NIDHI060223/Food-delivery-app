import React from 'react'
import Layout from '../../Component/Layout/Layout'
import '../../Styles/HomeStyle.css'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

function Home() {
  return (
    <div>
     <Layout>
        <Section1/>
        {/*home section about */}
        <Section2/>
        {/*home section Menu */}
        <Section3/>
     </Layout>
    </div>
  )
}

export default Home
