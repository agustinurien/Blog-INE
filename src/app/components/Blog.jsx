"use client"
import { figtree } from "../fonts"
import Link from 'next/link'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import SortBy from '../ui/SortBy'
import Search from "../ui/Search"
import { ArrowCircleRightOutlined } from "@mui/icons-material"
import { LazyMotion, domAnimation, motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"


const Blog = ({ blogs, query }) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const controls = useAnimation();



    const [sortedBlogs, setSortedBlogs] = useState(blogs)
    const [estado, setEstado] = useState("none")


    const sortBy = (option) => {
        if (option == "date" && query == "") {

            const sorted = [...blogs].sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            });
            setSortedBlogs(sorted);

        }
        if (option == "date" && query !== "") {
            const filtered = blogs.filter(blog => {

                const blogTitle = blog.title.toLowerCase();
                const queryLowerCase = query.toLowerCase();
                return blogTitle.includes(queryLowerCase);
            });
            const sorted = [...filtered].sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            });
            setSortedBlogs(sorted);
        }
        if (option == "none" && query == "") {
            setSortedBlogs(blogs);
        }
        if (option == "none" && query !== "") {
            const filtered = blogs.filter(blog => {

                const blogTitle = blog.title.toLowerCase();
                const queryLowerCase = query.toLowerCase();
                return blogTitle.includes(queryLowerCase);
            });
            setSortedBlogs(filtered);
        }

    };

    const sort = (event) => {
        sortBy(event)
        setEstado(event)
    }

    useEffect(() => {
        sortBy(estado);
    }, [query]);


    const whileHoverProp = {
        scale: 1.01,
        transition: {
            duration: 0.3,
            delay: 0
        }
    };

    useEffect(() => {
        if (isInView) {
            controls.start("effect")
            controls.start("animation")
        }

    }, [isInView, sortedBlogs])




    return (
        <section
            ref={ref}
            className={`${figtree.className} blogsSection`}>
            <LazyMotion features={domAnimation}>



                <div className="titleSectionContainer">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            animation: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0 }}
                        style={{ alignItems: "center" }}>
                        <h1 className="titleBlogSection">Programming Pulse</h1>
                        <h1 style={{ fontWeight: 400, fontSize: "0.9rem", margin: 0, marginTop: 10, color: "#ffffff90" }}> Explore Riveting Blog Content</h1>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            animation: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0 }}
                        className="containerSearchSort"
                    >
                        <Search />
                        <SortBy blogs={blogs} sort={sort} />
                    </motion.div>
                </div>
                <section className="blogsContainer">

                    <Suspense fallback={<div>Loading...</div>}>
                        {sortedBlogs.map((blog, index) => {
                            const delay = index * 0.1;
                            return (
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: 100 },
                                        effect: { opacity: 1, x: 0 }
                                    }}
                                    initial="hidden"
                                    animate={controls}
                                    transition={{ duration: 0.5, delay: 0.1 + delay }}
                                    className={query !== "" ? "cardSorted" : "cardContainer"}
                                    key={blog.id} >

                                    <div className={query !== "" ? "imgSorted" : "imgContainer"}>
                                        <img loading="lazy" src={blog.image?.url} alt="cover Image"></img>
                                    </div>

                                    <div className={query !== "" ? "textSorted" : "textBlogContainer"} >
                                        <div>
                                            <motion.h2
                                                variants={{
                                                    hidden: { opacity: 0, y: 30 },
                                                    effect: { opacity: 1, y: 0 }
                                                }}
                                                initial="hidden"
                                                animate={controls}
                                                transition={{ duration: 0.3, delay: 0.2 }}
                                            >{blog.title}</motion.h2>

                                            <motion.span
                                                variants={{
                                                    hidden: { opacity: 0 },
                                                    effect: { opacity: 1 }
                                                }}
                                                initial="hidden"
                                                animate={controls}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                            >{blog.date}</motion.span>

                                            <motion.p
                                                variants={{
                                                    hidden: { opacity: 0 },
                                                    effect: { opacity: 1 }
                                                }}
                                                initial="hidden"
                                                animate={controls}
                                                transition={{ duration: 0.5, delay: 0.4 }}
                                            >{blog.description}</motion.p>
                                        </div>
                                        {
                                            query !== "" ?
                                                <div className="sortedLinkContainer">
                                                    <Link className="sortedLink" href={`blogDetail/${blog.id}`}><ArrowCircleRightOutlined className="arrowlink" /></Link>
                                                </div>
                                                :
                                                <div className="containerLink">
                                                    <Link className="link" href={`blogDetail/${blog.id}`}>Show More</Link>
                                                </div>
                                        }

                                    </div>
                                </motion.div>
                            )
                        })}
                    </Suspense>
                </section >
            </LazyMotion>
        </section >
    )
}

export default Blog
