import React from 'react';
import Footer from '../components/Footer/Footer';
import FooterSideNav from '../components/FooterSideNav/FooterSideNav'
import Header from '../components/Header/Header'

const OnlineSupport = ({page}) => {
  return (
    <>
    <Header/>
    <FooterSideNav page={page}/>
<Footer/>
    </>
  )
}


export default OnlineSupport