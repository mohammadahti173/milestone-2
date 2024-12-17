import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className=''>
<ul className="flex justify-end bg-gray-300 text-white p-5 gap-20 font-serif font-semibold ">
<li><Link href={'/#'}>Home</Link></li>
  <li><Link href={'/About'}>About</Link></li>
  <li><Link href={'/Contact'}>Contact</Link></li>
  <li><Link href={'/Services'}>Services</Link></li>
</ul>
    </div>
  )
}

export default Home
