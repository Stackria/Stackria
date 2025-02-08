import Image from 'next/image'
import React from 'react'
import {portfolioList} from '@/app/portfolio/portfolioList'

export const Portfolio = () => {
  return (
    <section>
      <div>
        {/* Destructed portfolioList */}
        {portfolioList.map(({ title, details, link, img, icons: Icons, span, button }, index)=> (
          <div key={index}>
            <div className="">
              <h1>{title}</h1>
              <p className="">{details}</p>
              {/* Tech Stack */}
              <div className="">
                <h1 className="">{span}</h1>
                {/* Stack logo */}
                <div className="">
                  {Icons.map((Icon, i) => (
                    <Icon key={i} className="text-blue-500 text-2xl" />
                  ))}
                </div>
                {/* Button */}
                <a href={button.url} className="class">{button.text}</a>
              </div>
            </div>
            {/* Showcase Image */}
            <div className="">
              <Image 
                className='xl:w-[150px] w-[150px] h-auto' 
                // Change logo to svg
                src={img} 
                width={150} 
                height={150} 
                priority 
                alt={title}/>
            </div>
          </div>
        ))}
      </div>
    </section>

  )
}

