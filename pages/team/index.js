import React from "react";
import PageWrapper from "../../components/Layout/PageWrapper";
import style from "./style.module.css";
import Hero from "../../components/pages/Home/Hero"
import About from "../../components/pages/Home/About"
import Team from "../../components/pages/Team";
import Tabs from './Tabs';
import {members, categories} from './Tabs/memberData';

const team = () => {
  return (
    <PageWrapper
      title="Team GDSC-PU"
      description="Teampage GDSC presidency university"
    >
    <Hero
      title="Google Developer Student Clubs" 
      mobtitle= "GDSC"
      subtitle="Presidency University Bengaluru"
      heroimg="/assets/illustrations/helping-each-other.svg"
      logosource="/assets/icons/gdsc_logo_single.png"
    />

    <About 
        title="Meet the Team"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo modi alias non culpa dolore repellendus quidem impedit blanditiis mollitia officiis unde quos hic, dolorum nisi quisquam? Animi cumque ut ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque quam fuga laborum. Quo similique facere culpa eaque quasi facilis officiis ipsa vero modi repellat possimus eius pariatur, vel odit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora saepe ut quia mollitia corrupti eaque in voluptatem temporibus quo id. Illo doloribus blanditiis debitis officiis pariatur rem saepe impedit iusto!"
        aboutimg="/assets/illustrations/business-meeting.png"
        />
    <Team />
        

        

    <Tabs members={members} categories={categories} />
    </PageWrapper>
  );
};

export default team;
