import React from 'react'
import Navbar from '../component/Navbar'
import FormInput from "./FormInput"

export const metadata = {
    title: "Contact Kalon",
}

const page = () => {
    return (
        <>
            <Navbar />
           <FormInput  />
        </>
    )
}

export default page