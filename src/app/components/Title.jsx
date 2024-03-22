"use client"

import React, { useEffect, useRef } from 'react'
import { figtree } from '../fonts'
import { LazyMotion, domAnimation, motion, useAnimation, useInView } from "framer-motion"

const Title = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("animation")
        }

    }, [isInView])

    return (
        <LazyMotion features={domAnimation}>

            <motion.section
                ref={ref}
                variants={{
                    hidden: { opacity: 0 },
                    animation: { opacity: 1 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 1, delay: 0 }}
                className={`${figtree.className} sectionTitle`}>
                <motion.h1
                    variants={{
                        hidden: { scale: 0.9 },
                        animation: { scale: 1 }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.5, delay: 0 }}
                    className='titleHome'>
                    <span style={{ fontWeight: 400 }}>Digital</span> <span style={{ color: "white" }} >Blog</span>
                </motion.h1>
                <motion.h2
                    variants={{
                        hidden: { opacity: 0 },
                        animation: { opacity: 1 }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='subTitleHome'>Discover and Boost Your Creativity and Productivity</motion.h2>

            </motion.section>
        </LazyMotion>
    )
}

export default Title
