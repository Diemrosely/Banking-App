import { logoutAccount } from '@/lib/actions/user.actions';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter(); 

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount(); 

    if(loggedOut) router.push('/sign-in')
  }
  return (
    <footer className='footer z-0'>
        <div className={type === 'mobile' ? 'footer-name_mobile' : 'footer_name'}>
          <p className='text-xl font-bold text-bankGreen z-1'>
            {user?.firstName[0]}
          </p>
        </div>
        <div className={type === 'mobile' ? 'footer-email_mobile' : 'footer_email'}>
          <h1 className='text-14 truncate font-semibold filter brightness-0 invert'>
            {user?.firstName}
          </h1>
          <p className='text-14 truncate font-normal filter brightness-0 invert'>
            {user?.email}
          </p>

        </div>

        <div className='footer_image' onClick={handleLogOut}>
            <Image src="icons/logout.svg" fill alt="jsm" className='filter brightness-0 invert'/>
        </div>
    </footer>
  )
}

export default Footer