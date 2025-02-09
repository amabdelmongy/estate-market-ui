"use client";
import { Container } from "@mantine/core";
import TopPropertiesSection from "../components/Sections/TopPropertiesSection";
import Headtitle from "../components/HeadTitle";
import HomeHeader from "src/components/Home/HomeHeader";
import CategoriesSection from "src/components/Sections/CategoriesSection";
import TopAgentsSection from "src/components/Sections/TopAgents";
import TopReviewsSection from "src/components/Sections/TopReviewsSection";
import FeaturePropertySection from "src/components/Sections/FeatureProperty";
import OptionsSection from "src/components/Sections/OptionsSection";
import { Suspense } from "react";
import TopPropertiesLoading from "src/components/LoadingComponents/TopPropertiesLoading";
import TopAgentsLoading from "src/components/LoadingComponents/TopPropertiesLoading";
import FeatureProprtyLoading from "src/components/LoadingComponents/FeaturePropertyLoading";
import TopReviewsLoading from "src/components/LoadingComponents/TopReviewsLoading";

// main index page of the website each section seperated in sections , can be customized from components/sections files
// please read the documentation for more information

const Home = () => {
  // dev by (nisalk @ Devocade)
  return (
    <main className="pb-4">
      {/* Title header section */}
      <div>
        <HomeHeader />
      </div>

      {/* home page sections */}
      <Container size="xl" className="mt-20">
        {/* Top properties */}
        <section>
          <Headtitle title={"Top properties"} link="/allproperties" />
          <Suspense fallback={<TopPropertiesLoading />}>
            <TopPropertiesSection />
          </Suspense>
        </section>

        {/* Options */}
        <section className="mt-2">
          <Headtitle title={"I want to ..."} />
          <OptionsSection />
        </section>
        {/* Categories */}
        <section className="mt-2">
          <Headtitle title={"Top categories"} />
          <CategoriesSection />
        </section>

        {/*Feature Agents */}
        <section className="mt-2">
          <Headtitle title={"Feature agents"} />
          <Suspense fallback={<TopAgentsLoading />}>
            <TopAgentsSection />
          </Suspense>
        </section>

        {/* Single property grid */}
        <section className="mt-2" id="featured">
          <Headtitle title={"Feature property"} />
          <Suspense fallback={<FeatureProprtyLoading />}>
            <FeaturePropertySection />
          </Suspense>
        </section>

        {/* Reviews */}
        <section className="mt-2">
          <Headtitle title={"To reviews"} />
          <Suspense fallback={<TopReviewsLoading />}>
            <TopReviewsSection />
          </Suspense>
        </section>
      </Container>
    </main>
  );
};

export default Home;
