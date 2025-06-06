import React from 'react'
import { Environment } from '@react-three/drei';
const Herolights = () => {
  return (
    <>
     <spotLight position={ [2,5,6]} 
     intensity = {100}
     angle = {90} 
     penubra = {0.2}
     color ="white"
/>
   
     <spotLight position={ [-6,8,5]} 
     intensity = {100}
     angle = {0.23} 
     penubra = {0.5}
     color ="BLUE"
/><spotLight position={ [-3,5,5]} 
     intensity = {60}
     angle = {0.8} 
     penubra = {0.5}
     color ="PINK"
/>
<spotLight position={ [10,3,-10]} 
     intensity = {100}
     angle = {0.23} 
     penubra = {0.5}
     color ="GREEN"
/>

   </>
      
  )
}

export default Herolights
