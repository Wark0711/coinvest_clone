import React from 'react'
import About from './extra/About'
import Images from './extra/Images'
import Infobar from './extra/Infobar'
import Friends from './friends/Friends'
import Logo from './logos/Logo'
import Logos from './logos/Logos'
import './Main.css'
import Start from './start/Start'
import Content from './test/Content'
import Head from './test/Head'
import Heading from './test/Heading'
import Test from './test/Test'
import acc from '../../assets/acc.jpg'
import pic1 from '../../assets/pers1.jpg'

function Main() {
  return (
    <div className='main d-flex justify-content-md-around flex-column flex-md-row'>
        <div className="main-left d-flex flex-column align-items-center">
        <Start />
        <Infobar />
        <About />
        <Images />
        <Friends />
        </div>
        <div className="main-right d-flex flex-column align-items-center">
          <div className="main-rhs-summary">
            <Heading />
            <Content />
            <Logos />
          </div>
          <div className="main-rhs-summ2">
            <Head src={acc} />
            <Content />
            <Logo />
          </div>
          <div className="main-rhs-test">
            <Head src={acc} />
            <Test />
            <Logo />
          </div>
          <div className="main-rhs-summ2">
            <Head src={pic1} />
            <Content />
            <Logo />
          </div>
          <div className="main-rhs-test">
            <Head src={pic1} />
            <Test />
            <Logo />
          </div>
        </div>
    </div>
  )
}

export default Main