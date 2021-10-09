import Navbar from '../Navbar/Navbar'
import Head from 'next/head'

import { useEffect, useState } from 'react'
const Layout = (props) => {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 70) {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
  }

  return (
    <div className={`mx-auto bg-lightGray ${showNav === true ? '' : null}`}>
      <Head>
        <title>Mighty Barbershop</title>
      </Head>
      <nav
        className={`fixed top-0 inset-x-0 z-50  mx-auto bg-[#594929] transition duration-300 bg-opacity-70 ${
          showNav === true
            ? 'md:bg-opacity-70 md:bg-[#594929]'
            : 'md:bg-transparent'
        } `}
      >
        <Navbar />
      </nav>
      <main>{props.children}</main>
      <footer></footer>
    </div>
  )
}
export default Layout
