import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navBar/Navbar'
import Head from "next/head";



export const outfit = localFont({
  src: "./fonts/Outfit-Thin.ttf",
  variable: "--font-outfit",
  weight: "300",
});

export const museo = localFont({
  src: "./fonts/Museo_Slab_700.otf",
  variable: "--font-museo",
  weight: "700",
});
export const museoReg = localFont({
  src: "./fonts/Museo_Slab_500.otf",
  variable: "--font-museo",
  weight: "700",
});
export const museoBold = localFont({
  src: "./fonts/Museo_Slab_700.otf",
  variable: "--font-museo",
  weight: "700",
});
export const outfitLight = localFont({
  src: "./fonts/Outfit-Light.ttf",
  variable: "--font-outfitLight",
  weight: "500",
});
export const outfitRegular = localFont({
  src: "./fonts/Outfit-Regular.ttf",
  variable: "--font-outfitLight",
  weight: "500",
});
export const outfitSemibold = localFont({
  src: "./fonts/Outfit-SemiBold.ttf",
  variable: "--font-outfitLight",
  weight: "600",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Add the favicon link here */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        
      </Head>
      {/* Structured Data */}
        <Script
          id="stackria-org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Stackria",
              url: "https://stackria.com",
              logo: "https://stackria.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/stackria",
                "https://twitter.com/stackria",
                "https://instagram.com/stackrialtd"
              ]
            }),
          }}
        />
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
