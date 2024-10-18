'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Footer from './Footer'
import PlaidLink from './PlaidLink'


const Sidebar = ({ user }: SideBarProps) => {
  const pathname = usePathname(); 
  
  return (
    <section className='sidebar relative'>
        {/* Background Image */}
        <Image 
        src="/assets/evergreen.jpg"
        alt="Sidebar background"
        layout='fill'
        objectFit='cover'
        className='absolute inset-0 z-0'
        />
        <nav className='relative z-10 flex flex-col gap-4'>
            <Link 
            href="/"
            className='mb-12 cursor-pointer flex items-center gap-2'>
                <div className="relative inline-block p-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full">
                <Image
                    src="/assets/trans-stacks.png"
                    width={700}
                    height={700}
                    alt="Stack logo"
                    className='w-full h-auto object-contain'
                />
                {/* <h1 className='sidebar-logo'>
                    Stack.
                </h1> */}
                </div>
            </Link>
            {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return (
                    <Link
                    href={item.route}
                    key={item.label}
                    className={cn('sidebar-link text-white transition-all duration-300 relative flex items-center gap-2 px-4 py-2 rounded-md', {
                        'bg-bank-gradient': isActive,
                      })}
                      style={{
                          boxShadow: isActive ? '' : 'none',
                          transition: 'all 0.3s ease-in-out',
                      }}
                      onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(80, 200, 120, 0.75), 0 0 30px rgba(80, 200, 120, 0.75)';
                      }}
                      onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}
                    >
                    <div className='relative size-6'>
                        <Image 
                            src={item.imgURL}
                            alt={item.label}
                            fill
                            // className={cn({
                            //     'brightness-0 invert transition-all duration-300': isActive,
                            //     'hover:brightness-150': !isActive,
                            // })}
                            className='brightness-0 invert transition-all duration-300'
                        />
                    </div>
                    <p className={cn('sidebar-label',{
                        // '!text-white': isActive
                        })}>
                        {item.label}
                    </p>
                    </Link>
                )
            })}
           <PlaidLink user={user}/>
        </nav>

       <Footer user={user} />
    </section>
  )
}

export default Sidebar