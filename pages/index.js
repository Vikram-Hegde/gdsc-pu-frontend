import PageWrapper from "../components/Layout/PageWrapper";
import Button from "../components/globals/Button";
import FaqSection from "../components/pages/Home/FaqSection";
import Hero from "../components/pages/Home/Hero"
import About from "../components/pages/Home/About"
import WhatWeDo from "../components/pages/Home/whatwedo"
export default function Home() {
  return (
    <PageWrapper
      title="Home GDSC-PU"
      description="Homepage GDSC presidency university"
    >
        <Hero 
         title="Google Developer Student Clubs" 
         subtitle="Presidency University Bengaluru"
         mobtitle="GDSC"
         logosource="/assets/icons/gdsc_logo_single.png"
         heroimg="/assets/illustrations/web-development.png"
        />
        <About 
          title="About GDSC"
          subtitle="A community of Developers, Designers and Programmers who grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community."
          aboutimg="/assets/illustrations/blogging.png"
        />
        <WhatWeDo/>
      <FaqSection />
    </PageWrapper>
  );
}
