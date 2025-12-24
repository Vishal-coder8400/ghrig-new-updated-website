import React from 'react'
import CarouselSection from './Carousel'
import JobCategories from './jobCategory'
import Accelerate_job from './accelarateJob'
import CarouselCard from "./CarouselCard";
import {Engage} from './engage'
import Banner_section from './banner_section_new'
import { HiringCompaniesWrapperSection } from './topHiringCompanies'
import {DiscoverJobCategories} from './discoverJobCategories'
import {FaqSection} from './faq'
import Testimonials from './Testimonials';


export default function page() {
  return (
    <div >
        <Banner_section />
      <CarouselSection />
      <Engage />
      <HiringCompaniesWrapperSection />
      <DiscoverJobCategories />
      <JobCategories />
      {/* <Accelerate_job /> */}
      <CarouselCard />
      <Testimonials />
      <FaqSection />
    </div>
  )
}