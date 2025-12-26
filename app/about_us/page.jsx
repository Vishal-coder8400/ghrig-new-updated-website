import React from 'react'
// import Redefining from '../about_us/redefining'
import Banner_Section from './banner_Section'
// import One_platform from './one_platform'
import Our_story from './our_story'
// import What_stand from './what_stand'
import BuiltForYou from './builtForYou'
import VisionMission from './VisionMission'
export default function page() {
  return (
    <div>
  
       {/* <Redefining/> */}
       <Banner_Section/>
       <VisionMission />
       <Our_story/>
       {/* <One_platform/> */}
       <BuiltForYou/>
       {/* <What_stand/> */}
  
    </div>
  )
}

