import { FaCode, FaRocket, FaShieldAlt, FaShoppingCart, FaMobileAlt, FaSearch } from "react-icons/fa";  
import pictureOne from '@/assets/logo-white.png'

export const portfolioList = [  
    {  
      title: "Custom Web Development",  
      details: "This platform was developed to simplify payment and product showcases.",  
      link: "/solutions/web-development",  
      img: "/images/web-development.png",  
      icons: [FaCode, FaRocket, FaMobileAlt],  
      span: "Web-Based Platform",  
      button: { text: "View Project", url: "/projects/web-development" },  
    },  
    {  
      title: "MVP Development",  
      details: "Bring your business idea to life with a Minimum Viable Product (MVP). We build a functional, streamlined version of your product so you can test the market, attract early users, and secure funding—without wasting time or resources. Launch fast, validate your idea, and scale with confidence.",  
      link: "/solutions/mvp",  
      img: "/images/mvp.png",  
      icons: [FaRocket, FaCode, FaShieldAlt],  
      span: "Startup MVP",  
      button: { text: "Explore MVPs", url: "/projects/mvp" },  
    },  
    {  
      title: "Web Care",  
      details: "Our web care solutions provide ongoing support, ensuring your digital tools remain secure, up-to-date, and fully optimized. We handle maintenance, performance monitoring, and security updates, so you can focus on growing your business without worry.",  
      link: "/solutions/web-care",  
      img: "/images/web-care.png",  
      icons: [FaShieldAlt, FaCode, FaSearch],  
      span: "Ongoing Support",  
      button: { text: "See Details", url: "/projects/web-care" },  
    },  
    // {  
    //   title: "E-Commerce Solutions",  
    //   details: "We build powerful, scalable e-commerce platforms designed to help you grow your business online. Whether you’re launching a new store or optimizing an existing one, our solutions include payment integrations, product management, and custom features to enhance the shopping experience.",  
    //   link: "/solutions/e-commerce",  
    //   img: "/images/ecommerce.png",  
    //   icons: [FaShoppingCart, FaCode, FaRocket],  
    //   span: "E-Commerce Platform",  
    //   button: { text: "Shop the Demo", url: "/projects/ecommerce" },  
    // },  
  ];  
  
  