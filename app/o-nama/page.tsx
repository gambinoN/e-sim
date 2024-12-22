'use client'

import { FooterSection } from "@/components/layout/sections/footer";
import { AboutUs } from "@/components/layout/sections/about-us";
import { FAQSection } from "@/components/layout/sections/faq";
import { ContactSection } from "@/components/layout/sections/contact";


// export const metadata = {
//   title: "Shadcn - Landing template",
//   description: "Free Shadcn landing page for developers",
//   openGraph: {
//     type: "website",
//     url: "https://github.com/nobruf/shadcn-landing-page.git",
//     title: "Shadcn - Landing template",
//     description: "Free Shadcn landing page for developers",
//     images: [
//       {
//         url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Shadcn - Landing template",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "https://github.com/nobruf/shadcn-landing-page.git",
//     title: "Shadcn - Landing template",
//     description: "Free Shadcn landing page for developers",
//     images: [
//       "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
//     ],
//   },
// };

export default function Home() {  
  return (
    <>
      <AboutUs />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
