'use client'
import PlusIcon from '@/components/elements/icons/PlusIcon'
import Link from 'next/link'
import React, { useState } from 'react'

const Faqs = () => {
const faqs = [
    {
        question: 'What areas of law does your firm specialize in?',
        answer: 'We focus on Advocacy & Alternative Dispute Resolution, Acquisitions & Restructuring, and Banking & Finance. Our services are designed to support individuals, businesses, and institutions navigating complex legal and commercial matters.'
    },
    {
        question: 'Do you handle both litigation and out-of-court settlements?',
        answer: 'Yes. We represent clients in court proceedings and also offer Alternative Dispute Resolution options such as arbitration, mediation, and negotiation to resolve matters efficiently and cost-effectively.'
    },
    {
        question: 'Who are your typical clients?',
        answer: 'We advise a diverse range of clients including individuals, startups, SMEs, corporations, and financial institutions. Our approach is tailored to meet the specific needs and objectives of each client.'
    },
    {
        question: 'How do I schedule a consultation?',
        answer: 'You can schedule a consultation by contacting us through our website, email, or phone. Our team will get in touch to understand your needs and arrange a suitable time to speak.'
    },
    {
        question: 'What should I expect during the initial consultation?',
        answer: 'During the initial consultation, we assess your legal issue, provide preliminary guidance, and outline potential strategies. This session helps you understand your options and the best path forward.'
    },
    {
        question: 'How are your legal fees structured?',
        answer: 'Our fees depend on the nature and complexity of the matter. We offer transparent pricing and may structure fees as fixed, hourly, or milestone-based depending on the service required.'
    },
    {
        question: 'Do you handle corporate and financial transactions?',
        answer: 'Yes. We provide comprehensive legal support for mergers and acquisitions, corporate restructuring, and a wide range of banking and finance transactions, ensuring compliance and strategic alignment.'
    },
    {
        question: 'Is my information kept confidential?',
        answer: 'Absolutely. We adhere to strict professional and ethical standards to ensure that all client information is handled with the highest level of confidentiality and discretion.'
    }
]

    const [activeFaqIndex, setActiveFaqIndex] = useState(0)

    const MoreQuestions = () => (
        <div className='mt-25 xl:mt-130'>
            <p className='text-[18px] font-medium leading-[160%]'>Still have a question?</p>
            <p className='text-[#828282] leading-[140%] mt-1.75'>don&apos;t worry we&apos;re here to address all your questions,<br className='hidden xl:inline-block' />just get in touch using any of the details below.</p>
            {/* <Link href="/contact" className='text-white w-max mt-[20px] font-[500] bg-[#00A859] py-[17px] px-[24px] rounded-[10px] flex items-center justify-center gap-x-[10px]'>
                Contact us
            </Link> */}
            <p className='text-black font-medium mt-3.75'><a className='hover:text-eee-red transition duration-200' href='mailTo:info@ekoejembiekosan.com'>info@ekoejembiekosan.com</a>, <a className='hover:text-eee-red transition duration-200' href='tel:+2348136476696'>+234 813 647 6696</a>, <a className='hover:text-eee-red transition duration-200' href='tel:+2348054325709'>+234 805 432 5709</a></p>
        </div>
    )

   return (
        <section id='faqs' className='py-25  px-4 lg:px-12 xl:px-32 2xl:px-44 pt-25 bg-white/40'>
            <div className='w-full xl:flex items-start justify-between gap-x-25'>
                <div className='w-full xl:w-4/12'  data-aos="fade-up" data-aos-delay="50">
                    <h3 className="font-medium text-[40px] text-eee-dark-gray">FAQs</h3>
                    <span className='hidden xl:block'>
                        <MoreQuestions />
                    </span>
                </div>
                <div className='mt-12.5 xl:mt-0 w-full xl:w-8/12' data-aos="fade-up" data-aos-delay="250">
                    {faqs.map((faq, faqIndex) => (
                        <div key={faqIndex} className={`cursor-pointer w-full border-t transition duration-200 border-[#A6A6A6] ${faqIndex === faqs.length - 1 && 'border-b'}`} onClick={()=>{setActiveFaqIndex(faqIndex)}}>
                            <div className={`flex items-start justify-between gap-x-5 py-7.5`}>
                                <p className='text-[18px] leading-[120%] text-[#00011F] w-[90%]'>
                                    {faq.question}
                                </p>
                                <div className='w-8'>
                                    <PlusIcon className={`transition duration-200 text-[#292D32] ${activeFaqIndex === faqIndex ? 'rotate-45 w-5 h-5' : 'w-4.5 h-4.5'}`} />
                                </div>
                            </div>
                            {activeFaqIndex === faqIndex && <div className='transition duration-200 pb-10 w-[95%]'>
                                <p className='leading-[140%] text-[#828282]'>{faq.answer}</p>
                            </div>}
                        </div>
                    ))}
                </div>
                <span className='xl:hidden block'>
                    <MoreQuestions />
                </span>
            </div>
        </section>
    )
}

export default Faqs