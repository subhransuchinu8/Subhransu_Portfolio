import React, { useRef } from 'react';
import {motion, useScroll } from "framer-motion";
import LiIcon from './LiIcon';



const Details = ({ type, time, place, info, cgpa }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">

        <LiIcon reference ={ref} />
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl">
                {type}
            </h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75">
                {place}   |   {time}
            </span>
            <p className="font-medium w-full">{info}</p>
            <p className="font-medium w-full">{cgpa}</p>
        </motion.div>
        </li>
    );
};

const Education = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="my-56">
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
            Education
        </h2>

        <div ref={ref} className="w-[75%] mx-auto relative">

            <motion.div 
            style={{scaleY: scrollYProgress}}
                className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light" />
            
            <ul className="w-full flex flex-col items-start justify-between li-4">
                <Details
                type = "Bachelors of Technology"
                time="2020-2024"
                place="Parala Maharaja Engineering college"
                info= "Electronics and Telecommunication Engineering"
                cgpa= "CGPA - 8.68"
                />

                <Details
                type = "Intermediate"
                time="2018-2020"
                place="Kendriya Vidyalaya Berhampur"
                cgpa= "Percentage - 86.4%"
                />

                <Details
                type = "Matriculation"
                time="2017-2018"
                place="Kendriya Vidyalaya Bhanjanagar"
                cgpa= "Percentage - 87.8%"
                />

            </ul>

        </div>

    </div>
  )
}

export default Education