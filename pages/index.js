import PageWrapper from "../components/Layout/PageWrapper";
import Button from "../components/globals/Button";
import FaqSection from "../components/pages/Home/FaqSection";
import Hero from "../components/pages/Home/Hero"
import About from "../components/pages/Home/About"
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
         logosource="/assets/icons/gdsc_logo.png"
         heroimg="/assets/illustrations/web-development.png"
        />
        <About 
          title="About GDSC"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo modi alias non culpa dolore repellendus quidem impedit blanditiis mollitia officiis unde quos hic, dolorum nisi quisquam? Animi cumque ut ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque quam fuga laborum. Quo similique facere culpa eaque quasi facilis officiis ipsa vero modi repellat possimus eius pariatur, vel odit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora saepe ut quia mollitia corrupti eaque in voluptatem temporibus quo id. Illo doloribus blanditiis debitis officiis pariatur rem saepe impedit iusto!"
          aboutimg="/assets/illustrations/blogging.png"
        />
      <FaqSection />
    </PageWrapper>
  );
}
