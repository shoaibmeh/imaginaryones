import React, { useRef } from 'react'
import banner from '../../img/islanddesktop.png'
import ballpurple from '../../img/ballpurple.png'
import Red from '../../img/red-riding.png'
import Gameboy from '../../img/gameboy.png'
import chicken from '../../img/chicken.png'
import astronaut from '../../img/astronaut.png'
import angrybird from '../../img/angry-bird.png'
import cyclops from '../../img/cyclops.png'
import koala from '../../img/koala.png'
import pineapple from '../../img/pineapple.png'
import ballbeige from '../../img/ballbeige.png'
import ballgreen from '../../img/ball-green.png'
import ballpink from '../../img/ballpink.png'
import Logo from '../../img/logo.png'
import walk from '../../img/webreel-mobile.jpg'
import rainbowhead from '../../img/rainbow-head-pink.jpg'
import { motion } from "framer-motion";
import { useState } from 'react';
import { useEffect, useCallback } from 'react'
import './MainPage.css'
const names = [
    'LOVE', 'LEARN', 'MAKE', 'MOON'
]


// function to scroll down with button >>>>>>
function MainPage() {
    const main = useRef(null);
    const what = useRef(null);

    const scrollto = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }
    // function for auto scroll down>>>>>>
    window.addEventListener('scroll', () => {
        if (window.scrollY > 5 && window.scrollY < 30) {
            window.scrollTo({
                top: what.current.offsetTop,
                behavior: "smooth"
            })
            // var element = document.getElementsByClassName("Navbar");
            // element.classList.toggle("navbar");
        }
        if (window.scrollY > 785 && window.scrollY < 793) {
            window.scrollTo({
                top: main.current.offsetTop,
                // behavior:"smooth"
            })
        }
    });
// change images on click>>>>>>>>>>

    const [bottomleft, setBottomLeft] = useState(astronaut);
    const [topleft, settopLeft] = useState(Red);
    // ------>
    const bottomLeftt = () => {
        let value = bottomleft;

        if (value === astronaut) {
            setBottomLeft(pineapple);
        }
        else if (value === pineapple) {
            setBottomLeft(angrybird);
        }
        else if (value === angrybird) {
            setBottomLeft(cyclops);
        }
        else {
            setBottomLeft(astronaut);
        }
    };
    //   ----->
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

    const [newName, setnewName] = useState("");
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);
    useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle])
    return (
        <>
            <nav className='Navbar'>
                <img src={Logo} alt="" style={{ width: 110, margin: 30 }} />
            </nav>


            <div className='main' ref={main}  >
                <img src={banner} alt="" className='banner' />
                <button className='v-btn' onClick={() => { scrollto(what) }}> Click </button>
            </div>

            {/* section 2------>>>>> */}

            <div className='what' ref={what} >
                <img src={ballpurple} alt="" className='m-ballpurple' />
                <img src={ballbeige} alt="" className='m-ballbeige' />
                <motion.img
                    drag
                    dragConstraints={{ left: -250, right: 1100, top: -200, bottom: 470 }}
                    dragElastic={0.2}
                    src={bottomleft} alt="" className='red-riding'
                    onDoubleClick={bottomLeftt} />
                <motion.img
                    drag
                    dragConstraints={{ left: -300, right: 1000, top: -500, bottom: 80 }}
                    dragElastic={0.2}
                    onDoubleClick={topLeftt}
                    src={topleft} alt="" className='red-riding2' />
                <div style={{ position: "relative" }} className='text' >
                    <p className='what-1'> WHAT IS</p>
                    <p className='what-2'>IMAGINARY ONES?</p>
                    <p className='what-3'> Imaginary Ones is a delightful 3D animated art collection with an initial drop of 8888 unique NFTs on th Ethereum network. The project believes in using art to spread love, positivity, and creativity. </p>
                    <span>READ MORE</span>
                </div>
            </div>

            {/* section 3------>>>>> */}

            <div className='section-3'>
                <div className='section-3-left'>
                    <h1>WE ARE</h1>
                    <h1>GOING TO</h1>
                    <h1><span>{newName}</span> IT~</h1>
                </div>
                <div className='section-3-right'>
                    <img src={walk} alt="" style={{ width: 320 }} />
                </div>

            </div>

            {/* section-4>>>>>>>>>>>>>>> */}

            <div className='section-4'>
                <div className='section-4-one'>
                    <h1>#IONS</h1>
                </div>
                <div className='section-4-two'>
                    <img src={rainbowhead} alt="" />
                </div>
                <div className='section-4-three'>
                    <h1 style={{ paddingTop: 20, fontWeight: 800 }}>GOOD VIBES</h1>
                </div>
            </div>

            {/* Section-5>>>>>>>>>>>>>>>>>>>> */}

            <div className='section-5'>
                <img src={ballpink} alt="" className='m-ballpurple' />
                <img src={ballgreen} alt="" className='m-ballbeige' />
                <motion.img
                    drag
                    dragConstraints={{ left: -250, right: 1100, top: -200, bottom: 470 }}
                    dragElastic={0.2}
                    src={bottomleft} alt="" className='red-riding'
                    onDoubleClick={bottomLeftt} />
                <motion.img
                    drag
                    dragConstraints={{ left: -300, right: 1000, top: -500, bottom: 80 }}
                    dragElastic={0.2}
                    onDoubleClick={topLeftt}
                    src={topleft} alt="" className='red-riding2' />
                <div style={{ position: "relative" }} className='text' >
                    <p className='why-1'> WHY BE</p>
                    <p className='why-2'>IMAGINARY ?</p>
                    <p className='why-3'>When we were young, we dreamt of being superheroes. Anything and everything seemed possible. However, as time went by, the reality of life robbed us of our childhood ambitions.</p>
                    <p className='why-3'>The Imaginary Ones wish to re-ignite that spark once again. Embrace creativity and work on the dreams you once had. Muster your courage and rewrite your story.</p>
                    <p className='why-3'>Enter the Imaginary World — where no ideas are too crazy nor dreams too foolish.</p>
                    <p className='why-3'>Let's imagine. Together.</p>

                </div>
            </div>
        </>
    )
}

export default MainPage