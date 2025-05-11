import React from 'react'
import {footerLinks, socialIcon} from "@/constants/index"
import { museoReg, outfitLight, outfitMed, outfitReg, outfitSM } from '@/app/layout';

const Links = () => {

  return (
    <footer>
        <div>
            <nav className='cursor-pointer leading-10 flex flex-col py-10 xl:py-20 lg:flex-row xl:flex-row justify-between gap-10 md:gap-20 xl:gap-20 xl:mt-20'>
                {footerLinks.map((footer) => 
                    <div key={footer.key} className="lg:pt-20 xl:pt-20 text-center xl:text-left">
                        <h2 className={`${museoReg.className} text-primary text-[26px]`}>{footer.title}</h2>
                        <ul>
                            {footer.links.map((link, index) => 
                                <li 
                                    className={`${outfitLight.className} text-black text-center xl:text-left text-sm xl:text-[16px] leading-7 hover:text-black cursor-pointer`} 
                                    key={`${footer.key}-${index}`}>
                                    {link.title}
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    </footer>

  )
}

export default Links