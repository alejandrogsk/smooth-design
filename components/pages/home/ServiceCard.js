import React from 'react'
import Link from "next/link";

import { motion } from 'framer-motion';

const ServiceCard = ({service}) => {


  return (
    <div
    
    className="home-service">
    <motion.img 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
      transition={{ duration: .8 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: "75px" }
      }}
    src={service.img.src} alt={service.img.alt} />

    <motion.div  className="home-service__card"
    
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
      transition={{ duration: .4 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: "50px" }
      }}
    >
        {/* <span>{service.top_title}</span> */}
        <img  src={service.icon.url} alt={service.icon.alt} />
        <h2>{service.title}</h2>
        <p>{service.content}</p>
        <Link href={service.cta.url}>
            <a className="btn-secondary">{service.cta.title}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3147 5.83244C13.0967 6.05569 12.9746 6.35537 12.9746 6.66744C12.9746 6.97951 13.0967 7.2792 13.3147 7.50244L25.4972 19.9999L13.3147 32.4949C13.0967 32.7182 12.9746 33.0179 12.9746 33.3299C12.9746 33.642 13.0967 33.9417 13.3147 34.1649C13.4207 34.2738 13.5475 34.3603 13.6874 34.4194C13.8274 34.4785 13.9778 34.5089 14.1297 34.5089C14.2817 34.5089 14.4321 34.4785 14.572 34.4194C14.712 34.3603 14.8388 34.2738 14.9447 34.1649L27.8997 20.8724C28.1273 20.639 28.2546 20.3259 28.2546 19.9999C28.2546 19.674 28.1273 19.3609 27.8997 19.1274L14.9447 5.83494C14.8388 5.72608 14.712 5.63956 14.572 5.58048C14.4321 5.5214 14.2817 5.49097 14.1297 5.49097C13.9778 5.49097 13.8274 5.5214 13.6874 5.58048C13.5475 5.63956 13.4207 5.72608 13.3147 5.83494V5.83244Z" fill="#F84525"/>
</svg>
            </a>
        </Link>
    </motion.div>
</div>
  )
}

export default ServiceCard


//Este es el que borr?? de dise??o

// {
//   "icon":{
//       "url": "/home/icono-dise??o.png",
//       "alt":"dise??o para pymes Crespo,Entre R??os"
//   },
//   "title":"Dise??amos la imagen de tu marca",
//   "content": "Te ayudamos a tener una imagen de visual bien definida, lo que har?? que tu marca se destaque en el sector en que compite.",
//   "img": {
//       "src":"/home/brand-design.jpg",
//       "alt": "Dise??o de identidad de marca"
//   },
//   "cta": {
//       "url":"/identidad-visual",
//       "title":"Ver m??s"
//   }
// },