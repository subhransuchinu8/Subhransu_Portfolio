import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/developer-pic-3.jpeg"
import { spring, useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration:5000})
const isInView = useInView(ref);

useEffect(() => {
    if(isInView){
        motionValue.set(value);
    }
}, [isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
    })
}, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
    <Head>
        <title>Subhransu || About Page</title>
        <meta name="description" content="any description" />
    </Head>
    <TransitionEffect />
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-100'>
        <AnimatedText text = "Passion Fuels Purpose!" className='  mb-16'/>
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                <p className='font-medium'>
                Hi, I'm Subhransu Patra, a Full Stack web developer and Coder with a passion for creating beautiful, functional, 
                and user-centered digital experiences.
                </p>
                <p className='my-4 font-medium'>
                I believe that design is about more than just making things look pretty. It's about solving problems and creating intuitive, enjoyable experiences for users. 
                </p>
                <p className='font-medium'>
                A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.
                </p>
            </div>
            <div className='col-span-3 relative h-max rounded-3xl border-2 border-solid border-dark bg-light p-8
            '>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                <Image src={profilePic} alt = "subhransu" className='w-full h-auto rounded-4xl' />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                        <AnimatedNumbers value={4} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Projects Completed</h2>
                </div>
            </div>
        </div>

        <Skills />
        <Education />
        </Layout>
    </main>
    </>
  )
}

export default about