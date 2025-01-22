import { outfitLight, museoReg } from "@/app/layout";
import Image from 'next/image';
import { solutionList } from "@/app/solutions/solutionsList";
import Link from "next/link";

export const Services = () => {
  return (
    <section>
      <div className="">
      {solutionList.map((solution, index) => {
          <div className=""
          key={index}>
            <Image
            src={solution.img}
            alt={solution.title}/>
            <h1 className="">{solution.title}</h1>
            <p className="">{solution.details}</p>
            <Link href={solution.link}>
            <a href="" className="">Learn More → </a>
            </Link>
          </div>
      })}
      </div>
    </section>
  )
}
