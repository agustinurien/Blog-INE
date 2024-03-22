"use client"

import React, { useEffect, useRef } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import { useAnimation, useInView, motion, LazyMotion, domAnimation } from 'framer-motion';

const Navbar = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("animation")
        }

    }, [isInView])

    return (
        <section className='navBarContainer'>
            <LazyMotion features={domAnimation}>

                <motion.div
                    ref={ref}
                    variants={{
                        hidden: { opacity: 0, width: 30 },
                        animation: { opacity: 1, width: "20%" }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.5, delay: 0 }}
                    className='navBar'>

                    <Link className="linkHome" href={`/`}>
                        <h4><HomeIcon /></h4>
                    </Link>
                </motion.div>
            </LazyMotion>
        </section>
    )
}

export default Navbar
