import { outfitLight, museoReg } from "@/app/layout";
import Image from 'next/image';
import { solutionList } from "@/app/solutions/solutionsList";
import Link from "next/link";
import {styles} from '@/constants/style'

export const Services = () => {
  return (
    <section>
      <div className="">
      {solutionList.map((solution, index) => (
        
          <div className="px-5 pb-10"
            key={index}>
              {/* Solution Image */}
            <div className="">
              <Image
                src={solution.img}
                alt={solution.title}
                width={300}
                height={400}
              />
            </div>

            {/* Solution Texts */}
            <div className="">
              <h1 className={`${styles.heading1} text-left py-2 `}>{solution.title}</h1>
              <span className={`${styles.paragraph} text-left leading-2`}>{solution.details}

              </span>
              <h3 className="text-secondary font-extrabold">
                {solution.link}  →
              </h3>
            </div>
          </div>
      ))}
      </div>
    </section>
  )
}
