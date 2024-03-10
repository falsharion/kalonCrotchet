"use client"
import React from 'react'
import { useState } from 'react'
import Button from "../component/Buttons"

function FormInput() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [issubmitted, setIsSubmitted] = useState('')

    const handleClick = async (e) => {
        e.preventDefault()
        
        const contact ={
            firstName, lastName, email, subject, message
        }

        const res = await fetch('http://localhost:3000/json/Db.json', {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(contact)
        })
        if ( res.status === 201) {
            console.log('heyyyy good job')
        }
    }


    return (
        <form onSubmit={handleClick}>
            <h1 className='py-2'>Your information</h1>
            <div className=' bg-gray-100 px-6 pb-6  flex flex-col lg:pr-16 lg:mr-24'>
                <label>
                    <span className='block py-4'>First Name</span>
                    <input className=' w-full p-1 ' type='text' onChange={(e) => setFirstName(e.target.value)} value={firstName} required />
                </label>
                <label>
                    <span className='block py-4'>Last Name</span>
                    <input className=' w-full p-1 ' type='text' onChange={(e) => setLastName(e.target.value)} value={lastName} required />
                </label>
                <label >
                    <span className='block py-4'>Email</span>
                    <input className=' w-full p-1 '  type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                </label>
            </div>

            <h1 className='pt-10 py-2'>Your Message</h1>
            <div className='bg-gray-100 pb-10 mb-10 px-6 flex flex-col lg:pr-16 lg:mr-24'> 
                
                <label>
                    <span className='block py-4'>Subject</span>
                    <input className=' w-full p-1 ' type='text' onChange={(e) => setSubject(e.target.value)} value={subject} required />
                </label>
                <label>
                    <span className='block py-4'>Message</span>
                    <textarea  className=' w-full p-1 ' onChange={(e) => setMessage(e.target.value)} type='text' value={message} required />
                </label>
            </div>
            <Button  label="submit" />
            <p className='p-2 mb-14 font-light text-sm'><span className=' text-orange-600 '>Note: </span>You will usually receive a responds within 1 – 2 days. If you don’t see a respond in 1 – 2 days, please check your spam folder as sometimes the email goes into there by accident.</p>

        </form>
    )
}

export default FormInput
