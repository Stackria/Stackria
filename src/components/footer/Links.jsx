import React from 'react'
import {footerLinks, socialIcon} from "@/constants/index"
import FooterLink from '@/components/footer/links/footerLink/FooterLink';
import styles from '@/constants/style'
import { museoReg, outfitLight } from '@/app/layout';

const Links = () => {

  return (
    <footer>
        <div>
            <nav className='block cursor-pointer leading-10 '>
                {footerLinks.map((footer) => 
                    <div key={footer.key}>
                        <h2 className={`${museoReg.className} text-slate-900 underline font-bold  text-[36px]`}>{footer.title}</h2>
                        <ul>
                            {footer.links.map((link, index) => 
                                <li className={`${outfitLight.className} text-slate-900 hover:text-black`} 
                                key={link.title}>
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