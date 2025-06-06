import React from 'react'
import { logoIconsList } from '../constants'

const LogoIcon = ({ icon }) => (
  <div className="flex-none flex-center marquee-item">
    <img
      src={icon.imgPath}
      alt={icon.name}
      className="w-16 h-16 object-contain"
    />
  </div>
)

const Logosection = () => {
  return (
    <div id="logos" className="relative my-10 md:my-20">
      <div className="gradient-edge left-edge" />
      <div className="gradient-edge right-edge" />
      <div className="marquee h-52 relative overflow-hidden">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={`${icon.name}-dup-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logosection
