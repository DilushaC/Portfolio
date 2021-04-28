import React from 'react'
import Navbar from './Navbar';
import {motion} from 'framer-motion';
import cv from '../CV/Dilusha Fernando CV.pdf';

export const Downloads = () => {

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
        <>
        <Navbar/>
        <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        >
        <div className="header-wrapper">
            <div className="main-info">
            <a href={cv} download="">  
            <button class="button"><span><b>Download My CV</b></span></button>
            </a>   
            </div>
        </div>
        </motion.div>
        </>
    )
}

export default Downloads;