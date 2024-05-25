import React from 'react'
import Banner from "@/components/frontend/dip/Banner";
import About from "@/components/frontend/dip/About";
import Service from "@/components/frontend/dip/Service";
import Portfolio from "@/components/frontend/dip/Portfolio";
import Blog from "@/components/frontend/dip/Blog";
import Member from "@/components/frontend/dip/Member";
import LetsMake from "@/components/frontend/dip/LetsMake";
import Contact from "@/components/frontend/dip/Contact";
import Footer from "@/components/frontend/dip/Footer";


export default function page() {
  return (
    <div>
      <div className='main-page'>
        <Banner></Banner>
        <About></About>
        <Service></Service>
        <Portfolio></Portfolio>
        <Member></Member>
        <Blog></Blog>
        <LetsMake></LetsMake>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  )
}
