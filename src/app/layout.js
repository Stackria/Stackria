import localFont from "next/font/local";
import "./globals.css";
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navBar/Navbar'
import Head from "next/head";

const outfit = localFont({
  src: "./fonts/Outfit-Thin.ttf",
  variable: "--font-outfit",
  weight: "300",
});

export const museo = localFont({
  src: "./fonts/Museo_Slab_700.otf",
  variable: "--font-museo",
  weight: "600",
});

// export const metadata = {
//   title: "Stackria",
//   description: "Ideas meets tech equals solutions for businesses",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Add the favicon link here */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>
      <body
        className={outfit.className}
      >
          <Navbar/>
          {children}
          <Footer/>
      </body>
    </html>
  );
}
