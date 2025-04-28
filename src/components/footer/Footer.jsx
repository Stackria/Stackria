import Image from 'next/image'
import Links from '../footer/Links'
import {socialIcons} from '@/constants'
import { styles } from '@/constants/style'
import { outfit, outfitLight } from '@/app/layout'

const Footer = () => {
  
  return (
    <footer className='flex-col w-full flex justify-between mx-auto px-50 h-[400px] bottom-0'>
        <div  className='flex flex-col xl:flex-row items-center justify-around text-center  h-[300px] px-40 py-10'>
          {/* Footer Logo */}
          <div className=' grid justify-items-center'>
            <div className='w-[150px]'>
              <Image
                className='w-full h-auto' 
                src='/logo.png' 
                width={150} 
                height={150} 
                priority 
                alt='web development agency'
              />
              <span className='block -mt-14 text-sm text-gray-900'>
                Building Rich Internet Applications That Thrives Businesses
              </span>
            </div>
          </div>

          
          {/* Footer Link */}
          <nav className="text-left">
              <Links/>
          </nav>
          
          {/* Social Icons  */}
          <div>
            <div className='flex justify-between gap-2'>
                {socialIcons.map((social, index) => 
                  <Image
                  alt=''
                  width={22}
                    key={social.id}
                    src={social.icon}
                  />
                  
                )}
            </div>
          </div>
        </div>
        
         {/* Footer Bottom */}
        <div className='mx-auto text-center align-center fixed bottom-0 py-2 bg-[#0ca8f2] w-full '>
          <h2 className={`${outfitLight.className} text-center text-white text-[15px]`}>© 2025, Stackria Ltd</h2>
        </div>
    </footer>
  )
}

export default Footer