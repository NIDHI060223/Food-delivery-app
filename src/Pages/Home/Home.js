import React from 'react'
import Layout from '../../Component/Layout/Layout'
import '../../Styles/HomeStyle.css'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'

function Home() {
  return (
    <div>
     <Layout>
        <Section1/>
        {/*home section about */}
        <Section2/>
        {/*home section Menu */}
        <Section3/>
         {/*home section Promotion */}
         <Section4/>
         {/*home section Shop */}
         <Section5/>
         {/*home section Blog */}
         <Section6/>
         {/*home section Contact */}
         <Section7/>
     </Layout>
    </div>
  )
}

export default Home
