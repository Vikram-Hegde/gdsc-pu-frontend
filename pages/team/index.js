import React from "react";
import PageWrapper from "../../components/Layout/PageWrapper";
import style from "./style.module.css";
import Hero from "../../components/pages/Home/Hero"
import About from "../../components/pages/Home/About"
import Team from "../../components/pages/Team";
import Tabs from './Tabs';
import { members, categories } from '../../data/memberData';

const team = () => {
  return (
    <PageWrapper
      title="Team GDSC-PU"
      description="Teampage GDSC presidency university"
    >
      <Hero
        title="Google Developer Student Clubs"
        mobtitle="GDSC"
        subtitle="Presidency University Bengaluru"
        heroimg="/assets/illustrations/helping-each-other.png"
        logosource="/assets/icons/gdsc_logo_single.png"
      />

      <About
        title="Meet the Team"
        subtitle="We're a team of Developers, Designers and Programmers who work independently towards learning, contributing and collaborating in unison."
        aboutimg="/assets/illustrations/business-meeting.png"
      />
      <Team />




      <Tabs members={members} categories={categories} />
    </PageWrapper>
  );
};

export default team;
