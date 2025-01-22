import Image from 'next/image'
import Links from '../footer/Links'
import {socialIcons} from '@/constants'
import { styles } from '@/constants/style'
import { outfit, outfitLight } from '@/app/layout'

const Footer = () => {
  
  return (
    <footer className='flex-col bg-slate-100 w-full flex justify-between mx-auto px-50 h-[400px]  bottom-0'>
        <div className='px-14 my-auto container bg-slate-100 py-10'>
          <div className='flex flex-col xl:flex-row items-center justify-between h-[500px] '>
            {/* Footer Logo */}
            <div className='flex-shrink-0'>
                <Image
                className='w-[150px] h-auto' 
                src='/logo.png' 
                width={150} 
                height={150} 
                priority 
                alt='web development agency'
                />
            </div>
            
            {/* Footer Link */}
            <nav className="text-center">
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
        </div>
        <div className='mx-auto text-center align-center py-2 bg-[#0ca8f2] w-full '>
          <h2 className={`${outfitLight.className} text-center text-white text-[16px]`}>© 2025, Stackria Ltd</h2>
        </div>
    </footer>
  )
}

export default Footer