import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (  
    <div className='flex justify-between mx-auto py-2 px-4 items-center bg-black sticky top-0'>
      <div className='mx-auto'>




        <img src='https://oleson.io/wp-content/uploads/2021/03/logo.png' width={200} height={40} alt='logo' />
      </div>
      <ul className='hidden sm:inline-flex gap-4 mx-auto text-zinc-100 text-sm capitalize'>
         <li>

           <Link to={""}>About us</Link>
        </li>
        <li>
           <Link to={""}>Capabilities</Link>
        </li>
        <li>
          <Link to={""}> Our clients</Link>
        </li>
        <li>
           <Link to={""}>Join our team</Link>
        </li>
        <li>
           <Link to={""}>Contact</Link>
        </li>
      </ul>

    </div>
  )
}

export default Navbar
