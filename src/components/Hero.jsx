import React from 'react'
import BLogo from "../assets/LogoSimple.png"
import BGMeds from "../assets/image.png"


function Hero() {
  return (
    <>
      <div className="hero-container">
        <img src={BGMeds} alt="" className="img-hero" />
        <div className="hero-content d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center flex-column flex-md-row">
            <img src={BLogo} alt="" className="img-fluid p-2 hero-logo" />
            <div className="vertical-rule d-none d-md-block"></div>
            <div className="text-content text-center text-md-left">
              <h1 className="hero-title krona-one-regular">ABIAN</h1>
              <p className="hero-description krona-one-regular">Academia Biologica Integral del Autismo y Neurodesarrollo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero