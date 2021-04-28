import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from "react-particles-js";
import {motion} from 'framer-motion';

function Home() {

    const pageTransition={
        in:{
            opacity:1,
            x:0
        },
        out:{
            opacity:0,
            x:"-100%"
        }
    }
    return (
        <div>
        <>
        <Particles
        params={{
        "particles": {
            "number": {
                "value": 100
            },
            "size": {
                "value": 7
            }
            
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        },
        
	}} />
    <Navbar/>
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
    <Header/>
    </motion.div>
    </>
            
    </div>
    )
}

export default Home
