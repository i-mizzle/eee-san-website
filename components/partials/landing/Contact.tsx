'use client'
import FormButton from '@/components/elements/form/FormButton'
import TextareaField from '@/components/elements/form/TextareaField'
import TextField from '@/components/elements/form/TextField'
import EmailAtIcon from '@/components/elements/icons/EmailAtIcon'
import MapPinIcon from '@/components/elements/icons/MapPinIcon'
import PhoneIcon from '@/components/elements/icons/PhoneIcon'
import React from 'react'

const Contact = () => {

    const sendMail = () => {

    }
    return (
        <section id='contact' className='py-25  px-4 lg:px-12 xl:px-32 2xl:px-44 pt-25 bg-eee-light-gray/40'>
            <div className='w-full xl:flex items-start justify-between gap-x-25'>
                <div className='w-full xl:w-5/12'  data-aos="fade-up" data-aos-delay="50">
                    <h3 className="font-medium text-[40px] text-eee-dark-gray">Get in touch</h3>
                    <p className="mt-5 mx-auto text-eee-dark-gray">Get in touch with our team to discuss your legal needs. We’re here to provide clear guidance, answer your questions, and help you take the next step with confidence.</p>

                    <div className='flex items-center gap-x-2 mt-10'>
                        <EmailAtIcon className='w-5 h-5 text-eee-red' />
                        <p className='text-[15px] text-eee-black font-medium'><a className='hover:text-eee-red transition duration-200' href='mailTo:info@ekoejembiekosan.com'>info@ekoejembiekosan.com</a></p>
                    </div>

                    <div className='flex items-center gap-x-2 mt-4'>
                        <PhoneIcon className='w-5 h-5 text-eee-red' />
                        <p className='text-[15px] text-eee-black font-medium'><a className='hover:text-eee-red transition duration-200' href='tel:+2348136476696'>+234 813 647 6696</a>, <a className='hover:text-eee-red transition duration-200' href='tel:+2348054325709'>+234 805 432 5709</a></p>
                    </div>

                    <div className='flex items-center gap-x-2 mt-4'>
                        <MapPinIcon className='w-5 h-5 text-eee-red' />
                        <p className='text-[15px] text-eee-black font-medium'>No. 2 Aknation Estate, Durumi Abuja.</p>
                    </div>

                    
                </div>
                <div className='mt-12.5 xl:mt-0 w-full xl:w-7/12' data-aos="fade-up" data-aos-delay="250">
                    <div className='mb-4 w-full'>
                        <TextField 
                            inputLabel={'Name'} 
                            fieldId={'name'} 
                            returnFieldValue={function (value: string): void {
                                throw new Error('Function not implemented.')
                            } }                            
                            inputPlaceholder='Your full name'
                            requiredField={true}
                        />
                    </div>
                    
                    <div className='mb-4 w-full'>
                        <TextField 
                            inputLabel={'Email'} 
                            fieldId={'email'} 
                            returnFieldValue={function (value: string): void {
                                throw new Error('Function not implemented.')
                            } }                            
                            inputPlaceholder='Your active email address'
                            requiredField={true}
                        />
                    </div>

                    <div className='mb-4 w-full'>
                        <TextField 
                            inputLabel={'Phone number'} 
                            fieldId={'name'} 
                            returnFieldValue={function (value: string): void {
                                throw new Error('Function not implemented.')
                            } }                            
                            inputPlaceholder='Your phone number'
                        />
                    </div>

                    <div className='mb-4 w-full'>
                        <TextareaField 
                            inputLabel={'Your message'} 
                            fieldId={'name'} 
                            returnFieldValue={function (value: string): void {
                                throw new Error('Function not implemented.')
                            } }                            
                            inputPlaceholder='Please tell us how we can be of service'
                        />
                    </div>

                    <div className='w-full lg:w-1/2 mt-8'>
                        <FormButton buttonAction={()=>sendMail()} buttonLabel={'Send message'} processing={false} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact