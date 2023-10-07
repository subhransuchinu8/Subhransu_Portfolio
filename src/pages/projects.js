import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const FeaturedProject = ({type, title, summary, link, github}) => {
    return(
        <article  className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light'>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                {/* <Image src = {img} alt={title} className="w-full h-auto" /> */}
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl dark:text-light'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'> <GithubIcon /> </Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:text-light'> Visit Project </Link>

                </div>
            </div>
        </article>
    )

}

const Project = ({type, title, summary, link, github}) => {
    return (

        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light'/>
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                {/* <Image src = {img} alt={title} className="w-full h-auto" /> */}
            </Link>

            <div className='w-full flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'> <GithubIcon /> </Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'> Visit </Link>

                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
    <Head>
        <title>Subhransu || Projects Page</title>
        <meta name="description" content="any description" />
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text= "Imagination Trumps Knowledge!" className='mb-16'/>

            <div className='grid grid-cols-12 gap-24'>
                <div className='col-span-12'>
                   <FeaturedProject 

                    title="E-commerce website"
                    summary="An ecommerce website."
                    link="https://github.com/subhransuchinu8"
                    type="Featured Project"
                    github={"https://github.com/subhransuchinu8"}
                   
                   />

                </div>
                <div className='col-span-6'>
                <Project 
                   title="Personal Portfolio"
                   summary="A personal portfolio where all my data is showcased, also the CV is attached."
                   link="/"
                   type="Featured Project"
                   github={"https://github.com/subhransuchinu8"}
                   />
                </div>

                <div className='col-span-6'>
                    Project-2
                    <p>To be Updated Soon..</p>

                </div>

                <div className='col-span-12'>
                    Featured Project
                    <p>To be Updated Soon..</p>
                </div>
                <div className='col-span-6'>
                    Project-3 
                    <p>To be Updated Soon..</p>
                </div>

                <div className='col-span-6'>
                    Project-4
                    <p>To be Updated Soon..</p>
                </div>

            </div>

        </Layout>
    </main>
    </>
  )
}

export default projects