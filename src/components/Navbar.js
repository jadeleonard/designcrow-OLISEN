import React from 'react'

const Navbar = () => {
  return (  
    <div className='flex justify-between mx-auto py-2 px-4 items-center bg-black sticky top-0'>
      <div className='mx-auto'>




        <img src='https://oleson.io/wp-content/uploads/2021/03/logo.png' width={200} height={40} alt='logo' />
      </div>
      <ul className='hidden sm:inline-flex gap-4 mx-auto text-zinc-100'>
         <li>
            About us
        </li>
        <li>
            Capabilities
        </li>
        <li>
            Our clients
        </li>
        <li>
            Join our team
        </li>
        <li>
            Contact
        </li>
      </ul>

    </div>
  )
}

export default Navbar
