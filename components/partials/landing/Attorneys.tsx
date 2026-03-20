'use client'
import ArrowIcon from '@/components/elements/icons/ArrowIcon'
import Image from 'next/image'
import { useRef } from 'react'

const Attorneys = () => {
    const attorneys = [
        {
            name: "Eko Ejembi Eko SAN",
            position: "Managing Partner",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            image: "/team/eko.jpg"
        },
        {
            name: "T. V. Gujor",
            position: "Senior Associate",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            image: "/team/gujor.jpg"
        },
        {
            name: "D. L. Saror",
            position: "Senior Associate",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            image: "/team/saror.jpg"
        },
        {
            name: "E. E. Akaater",
            position: "Senior Associate",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            image: "/team/akaater.jpg"
        },
        {
            name: "T. S. Terver-Ubwa",
            position: "Senior Associate",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            image: "/team/terver.jpg"
        },
        {
            name: "F. O. Alli",
            position: "Senior Associate",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            image: "/team/alli.jpg"
        },
        {
            name: "David Ayuba",
            position: "Junior Associate",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            image: "/team/ayuba.jpg"
        }
    ]

        const scrollRef = useRef<HTMLDivElement>(null)

        const scroll = (dir: 'prev' | 'next') => {
            if (!scrollRef.current) return
            const card = scrollRef.current.firstElementChild as HTMLElement | null
            if (!card) return
            const amount = card.offsetWidth + 20
            scrollRef.current.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' })
        }

        return (
        <section id='attorneys' className="px-8 lg:px-12 xl:px-32 2xl:px-44 py-20">
            <div className="w-full xl:w-1/2" data-aos="fade-up" data-aos-delay="50" >
                <h1 className="text-5xl font-outfit font-medium leading-[1em] text-eee-dark-gray">Our Attorneys</h1>
                <p className="mt-5 mx-auto text-eee-dark-gray">We are a team of skilled advocates and trusted advisors with a proven track record in handling complex legal matters. Our strength lies in our depth of knowledge, attention to detail, and unwavering commitment to our clients' success.</p>
            </div>

            <div className='w-full mt-20 xl:mt-10 relative' data-aos="fade-up" data-aos-delay="150">
                <div className='-top-15 right-0 flex absolute items-center gap-x-10'>
                    <button onClick={() => scroll('prev')} className='cursor-pointer p-2 bg-white/20 transition duration-200 hover:text-eee-red'>
                        <ArrowIcon className='w-5 h-5 -rotate-180' />
                    </button>
                    <button onClick={() => scroll('next')} className='cursor-pointer p-2 bg-white/20 transition duration-200 hover:text-eee-red'>
                        <ArrowIcon className='w-5 h-5' />
                    </button>
                </div>
                <div ref={scrollRef} className='flex items-start gap-x-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden [scrollbar-width:none]'>
                    {attorneys.map((attorney, attorneyIndex)=>(
                        <div className='w-[calc((100%-4px)/1.2)] md:w-[calc((100%-24px)/2.2)] xl:w-[calc((100%-44px)/3.2)] shrink-0' key={attorneyIndex}>
                            <div className='h-100 lg:h-150 relative'>
                                <Image src={attorney.image} alt='' fill className='object-cover' />
                            </div>
                            <p className='mt-4 font-google-sans text-lg font-semibold text-eee-black'>{attorney.name}</p>
                            <p className='mt-1 uppercase tracking-widest text-xs font-medium text-eee-dark-gray'>{attorney.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Attorneys