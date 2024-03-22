import Image from 'next/image'
import React from 'react'
import ine from "../../../public/assets/INE.svg"
import { figtree } from '../fonts'
const Footer = () => {
    return (
        <section className={`${figtree.className} footerSection`}>
            <div className='imageIneContainer'>

                <Image
                    src={ine}
                    alt="Description of image"
                    width={170}
                    height={"auto"}

                />
                <span style={{ fontSize: "1rem" }}>Challenge</span>
            </div>
            <div className='madeBy'>
                <span style={{ fontSize: "1rem", fontWeight: 400 }}>Made by -</span>
                <h4 style={{ margin: 0, fontSize: "1rem" }}>
                    Agustin Urien
                </h4>
            </div>
        </section>
    )
}

export default Footer
