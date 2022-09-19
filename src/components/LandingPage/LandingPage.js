import React from 'react'
import "./LandingPage.css";
import Logo from '../../img/logo.png'
import Red from '../../img/red-riding.png'
import Gameboy from '../../img/gameboy.png'
import chicken from '../../img/chicken.png'
import bathtub from '../../img/bathtub.png'
import beanie from '../../img/beanie.png'
import astronaut from '../../img/astronaut.png'
import angrybird from '../../img/angry-bird.png'
import cyclops from '../../img/cyclops.png'
import koala from '../../img/koala.png'
import mummy from '../../img/mummy.png'
import pineapple from '../../img/pineapple.png'
import samurai from '../../img/samurai.png'
import ballgreen from '../../img/ball-green.png'
import ballpink from '../../img/ballpink.png'
import ballpurple from '../../img/ballpurple.png'
import ballyellow from '../../img/ballyellow.png'
import ballbeige from '../../img/ballbeige.png'
import ballblue from '../../img/ballblue.png'
import { motion } from "framer-motion";
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
// import { useRef } from "react";
// import { useFollowPointer } from "./Use-follow-pointer.ts";

function LandingPage() {
  // const ref = useRef(null);
  // const { x, y } = useFollowPointer(ref);

  const [topleft, settopLeft] = useState(Red);
  const [topright, setTopRight] = useState(bathtub);
  const [bottomleft, setBottomLeft] = useState(pineapple);
  const [bottomright, setBottomRight] = useState(cyclops);

  // change images on click>>>>>>>>>>>>>>>
  const topLeftt = () => {
    let value = topleft;

    if (value === Red) {
      settopLeft(Gameboy);
    }
    else if (value === Gameboy) {
      settopLeft(koala);
    }
    else if (value === koala) {
      settopLeft(chicken);
    }
    else {
      settopLeft(Red);
    }
  };
  // ------>
  const topRightt = () => {
    let value = topright;

    if (value === bathtub) {
      setTopRight(beanie);
    }
    else if (value === beanie) {
      setTopRight(mummy);
    }
    else if (value === mummy) {
      setTopRight(samurai);
    }
    else {
      setTopRight(Red);
    }
  };
  // ------>
  const bottomLeftt = () => {
    let value = bottomleft;

    if (value === pineapple) {
      setBottomLeft(astronaut);
    }
    else if (value === astronaut) {
      setBottomLeft(angrybird);
    }
    else if (value === angrybird) {
      setBottomLeft(cyclops);
    }
    else {
      setBottomLeft(pineapple);
    }
  };
  // ------>
  const bottomRightt = () => {
    let value = bottomright;

    if (value === cyclops) {
      setBottomRight(beanie);
    }
    else if (value === beanie) {
      setBottomRight(Gameboy);
    }
    else if (value === Gameboy) {
      setBottomRight(bathtub);
    }
    else {
      setBottomRight(cyclops);
    }
  };
  let navigate = useNavigate();
  function move(){
    navigate('/home')
  }
  return (
    <div className='lp-main'>
    {/* <motion.div 
    ref={ref}
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 450,
        restDelta: 0.001
      }}
    className='box '/> */}
      <div className='lp-image'>
        <img src={Logo} alt="" />

      </div>
        <div style={{zIndex: 1, position:'relative'}}>
          <motion.img
            drag
            dragConstraints={{ left: -250, right: 1100, top: -500, bottom: 80 }}
            dragElastic={0.2}
            src={bottomleft} alt="" className='red-riding'
            onDoubleClick={bottomLeftt} />
          <motion.img
            drag
            dragConstraints={{ left: -1100, right: 200, top: -500, bottom:150 }}
            dragElastic={0.2}
            onDoubleClick={bottomRightt}
            src={bottomright} alt="" className='red-riding1' />
          <motion.img
            drag
            dragConstraints={{ left: -300, right: 1000, top: -200, bottom: 470 }}
            dragElastic={0.2}
            onDoubleClick={topLeftt}
            src={topleft} alt="" className='red-riding2' />
          <motion.img
            drag
            dragConstraints={{ left: -1000, right: 300, top: -200, bottom: 470 }}
            dragElastic={0.2}
            onDoubleClick={topRightt}
            src={topright} alt="" className='red-riding3' />
        </div>
        <div style={{zIndex: -1 }}>
          <img src={ballblue} alt="" className='ballblue' />
          <img src={ballpurple} alt="" className='ballpurple' />
          <img src={ballbeige} alt="" className='ballbeige' />
          <img src={ballpink} alt="" className='ballpink' />
          <img src={ballgreen} alt="" className='ballgreen' />
          <img src={ballyellow} alt="" className='ballyellow' />
        </div>


      

      <motion.button
        whileHover={{ scale: 1.1 }}
        onHoverStart={e => { }}
        onHoverEnd={e => { }}
        onClick = {move}
        className='button'>
        LET'S EXPLORE!
      </motion.button>
    
    </div>
    

  )
}

export default LandingPage