import { FaWordpressSimple, FaBootstrap, FaSquarespace, FaReact} from "react-icons/fa"; 
import { SiWoocommerce, SiCsswizardry  } from "react-icons/si";
import { BiSolidFileCss } from "react-icons/bi";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { BsFiletypeCss } from "react-icons/bs";

export const portfolioList = [  
    {  
      title: "ZL Shop",  
      details: "Well crafted sophisticated and seamless e-commerce web-based solution for Zamani Luxuries, an homage to timeless elegance and premium craftsmanship.",   
      img: "/images/portfolio/p-1.png",  
      icons: [FaWordpressSimple, SiWoocommerce],  
      span: "Technology Stack",  
      button: { text: "EXPLORE", url: "/portfolio/zamaniluxuries" },  
    },  
    {  
        title: "Colorful Sound Design",  
        details: "A web-based solution for a sound - production company, integrating a clean Bootstrap-based UI with Squarespace for appointment booking and service management..",  
        img: "/images/portfolio/p-4.png",  
        icons: [BiSolidFileCss , FaBootstrap, RiJavascriptFill, FaSquarespace],  
        span: "Technology Stack",  
        button: { text: "EXPLORE", url: "/projects/ecommerce" },  
      },
    {  
      title: "ES Broker",  
      details: "A stunning and user-friendly web-based solution for a real estate agent-broker, designed to enhance client engagement and streamline exclusive listings.",  
      img: "/images/portfolio/p-2.png",  
      icons: [BiSolidFileCss, FaBootstrap, RiJavascriptFill],  
      span: "Technology Stack",  
      button: { text: "EXPLORE", url: "/portfolio/esbroker" },  
    },  
    {  
      title: "Bill Me",  
      details: "A spectacular landing page for a financial technology application, Bill Me carefully highlight the company's aim and services.",  
      img: "/images/portfolio/p-3.png",  
      icons: [BiSolidFileCss, RiJavascriptFill, RiTailwindCssFill,  FaReact],  
      span: "Technology Stack",  
      button: { text: "EXPLORE", url: "/portfolio/billme" },  
    },  
     
  ];  
  
  