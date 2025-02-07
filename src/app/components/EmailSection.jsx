'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
const GithubIcon = '/images/socials/github-brands-solid.svg'
const LinkedInIcon = '/images/socials/linkedin-brands-solid.svg'

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/send'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const response = await fetch(endpoint, options)
    const resData = await response.json()
    console.log(resData)
    if (response.status === 200) {
      console.log('Message sent.')
      setEmailSubmitted(true)
    }
  }
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div className='bg-gradient-to-r from-primary-900 to-transparent rounded-full h-80 w-80 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2'></div>

      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className='socials flex flex-row gap-2 '>
          <Link href='https://www.github.com/Rajjada001'>
            <Image
              src={GithubIcon}
              alt='Github Icon'
              width={30}
              height={30}
              className='invert mr-2'
            />
          </Link>
          <Link href='https://www.linkedin.com/in/nagaraju-jada-897819195/'>
            <Image
              src={LinkedInIcon}
              alt='Linkedin Icon'
              width={30}
              height={30}
              className='invert'
            />
          </Link>
        </div>
      </div>

      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label
              htmlFor='email'
              type='email'
              className='text-white block text-sm font-medium mb-2'>
              Your Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='username@gmail.com'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='subject'
              className='text-white block text-sm font-medium mb-2'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              required
              className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='Just Saying Hi'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='message'
              className='text-white block text-sm mb-2 font-medium'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type='submit'
            className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full '>
            Send Message
          </button>
        </form>
        {
          // If the email was submitted successfuly, show a success message.
          emailSubmitted && (
            <p className='text-green-500 text-sm mt-2 text-center'>
              Email sent successfuly!
            </p>
          )
        }
      </div>
    </section>
  )
}

export default EmailSection
