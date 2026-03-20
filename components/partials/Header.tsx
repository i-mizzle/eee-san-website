"use client";

import React, { useEffect, useRef, useState } from 'react'
import Logo from '../elements/Logo'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const pathname = usePathname()
  const anchorSections = ['areas', 'attorneys', 'faqs', 'contact']

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(null)
      return
    }

    const updateActiveSection = () => {
      const probeLine = window.innerHeight * 0.35
      let nextActiveSection: string | null = null

      for (const sectionId of anchorSections) {
        const element = document.getElementById(sectionId)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= probeLine && rect.bottom >= probeLine) {
          nextActiveSection = sectionId
          break
        }
      }

      setActiveSection(nextActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection)
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [pathname])

  useEffect(() => {
    if (pathname !== '/') return

    const currentHash = window.location.hash.replace('#', '')

    if (activeSection) {
      if (currentHash !== activeSection) {
        window.history.replaceState(null, '', `/#${activeSection}`)
      }
      return
    }

    if (currentHash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }, [activeSection, pathname])

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null)

  const getMenuLinkClassName = (href: string) => {
    const sectionId = href.startsWith('/#') ? href.slice(2) : null
    const isArticlesLink = href === '/articles'
    const isActive = sectionId
      ? pathname === '/' && activeSection === sectionId
      : isArticlesLink && pathname.startsWith('/articles')

    return `text-xl mb-6 xl:mb-0 xl:text-[15px] font-outfit font-medium transition duration-200 block ${isActive ? 'text-eee-red' : 'text-eee-dark-gray hover:text-eee-black'}`
  }

  const MenuLinks = () => {
    return (
      <div className='xl:flex items-center justify-center gap-x-5 bg-transparent xl:bg-white px-8 xl:px-10 py-4 rounded-full xl:shadow-xl shadow-eee-red/5'>
        {/* <button className='text-sm font-outfit text-eee-dark-gray font-medium transition duration-200 hover:text-eee-black'>About us</button> */}
        <Link onClick={()=>{setMobileMenuOpen(false)}} href={`/#areas`} className={getMenuLinkClassName('/#areas')}>Practice aras</Link>
        <Link onClick={()=>{setMobileMenuOpen(false)}} href={`/#attorneys`} className={getMenuLinkClassName('/#attorneys')}>Our attorneys</Link>
        <Link onClick={()=>{setMobileMenuOpen(false)}} href={`/#faqs`} className={getMenuLinkClassName('/#faqs')}>FAQs</Link>
        <Link onClick={()=>{setMobileMenuOpen(false)}} href={`/articles`} className={getMenuLinkClassName('/articles')}>Articles</Link>
        <Link onClick={()=>{setMobileMenuOpen(false)}} href={`/#contact`} className='text-md xl:hidden block text-center w-full rounded-full bg-eee-red font-google-sans text-eee-white font-semibold px-5 py-4 transition duration-200 hover:bg-eee-black cursor-pointer'>
            Get in touch
        </Link>
      </div>
    )
  }

  return (
    <header className={`px-8 lg:px-12 animate__animated animate__fadeInDown z-999 xl:px-32 2xl:px-44 py-4 flex items-center justify-between fixed w-full transition-colors duration-300 ${isScrolled ? 'bg-eee-white/95' : ''}`}>
      <div className='xl:w-3/12 w-10/12'>
        <Logo />      
      </div>

      <div className='hidden w-6/12 xl:flex items-center justify-center'>
        <MenuLinks />
      </div>

      <div className='xl:hidden'>
          <button ref={mobileMenuButtonRef} onClick={()=>{setMobileMenuOpen(!mobileMenuOpen)}} className='xl:hidden text-eee-red md:-mr-5'>
              {!mobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              }
          </button>

          <div ref={mobileMenuRef} className={`${mobileMenuOpen ? 'block opacity-100' : 'hidden opacity-0'} bg-white absolute right-[5%] md:top-3 md:max-h-screen transition-opacity duration-200 h-inherit p-6 z-999 w-[90%] lg:w-[40%] rounded-lg border border-white/30 shadow-lg shadow-black/10`} >
            <div className='mt-2 md:mt-0'>
                <MenuLinks />
            </div>
          </div>
      </div>

      <div className='w-3/12 hidden xl:flex flex-row-reverse'>
        <Link  href={`/#contact`} className='text-[14px] rounded-full bg-eee-red font-google-sans text-eee-white font-semibold px-5 py-4 transition duration-200 hover:bg-eee-black cursor-pointer'>
            Get in touch
        </Link>
      </div>
    </header>
  )
}

export default Header