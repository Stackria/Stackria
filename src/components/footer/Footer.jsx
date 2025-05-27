import Image from 'next/image'
import Links from '../footer/Links'
import {socialIcons} from '@/constants'
import { outfit, outfitLight, outfitRegular } from '@/app/layout'

const Footer = () => {
  
  return (
    <footer className='flex flex-col w-full justify-between min-h-[400px]'>
        <div  className='flex flex-col xl:flex-row items-center justify-around text-center px-12 py-10'>
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
              <span className={`${outfitRegular.className} block -mt-14 text-[15px] text-gray-900`}>
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
                  height={22}
                    key={social.id}
                    src={social.img}
                  />
                  
                )}
            </div>
          </div>
        </div>
        
         {/* Footer Bottom */}
        <div className='mt-auto text-center py-2 bg-[#0ca8f2] w-full'>
          <h2 className={`${outfitLight.className} text-center text-white text-[11px] md:text-[15px]`}>© 2025, Stackria Ltd</h2>
        </div>
    </footer>
  )
}

export default Footer