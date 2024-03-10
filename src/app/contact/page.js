import React from 'react'
import FormPageTitile from "../component/Headers"
import FormInput from "./FormInput"

export const metadata = {
    title: "Contact Kalon",
}

const page = () => {
    return (
        <div className='mx-8 md:m-20'>
           <FormPageTitile title="Contact Us" />
           <FormInput  />
        </div>
    )
}

export default page