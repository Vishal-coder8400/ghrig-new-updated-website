import React from 'react'
import ServiceBanner from "../services/banner"
import Head from 'next/head'
import AssociatedSectors from '../services/associate_sectors'
// import Solutions from '../services/solutions'
import OurServices from '../services/ourServices'
import WhyPartner from './WhyPartner'
import What_stand from './what_stand'
// import Testimonials from '../services/testimonial'

export default function page() {
  return (
    <div>
  
        <ServiceBanner/>
        {/* <AssociatedSectors/> */}
        {/* <Solutions/> */}
        <div className='mt-5'>
          <OurServices/>
        </div>
        {/* <Testimonials/> */}
        <WhyPartner/>
        <What_stand/>
    </div>
  )
}
