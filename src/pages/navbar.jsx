import React from 'react';
import "./sport.css"
// Define the Menu component
import { useState } from 'react';
import { MdNavigateNext } from "react-icons/md";


const Nav = () => {
  const [hoveredElement, setHoveredElement] = useState(null);


const handleMouseEnter = (element) => {
  setHoveredElement(element);
};

const handleMouseLeave = () => {
  setHoveredElement(null);
};
  return (
   <>
    <div className="sub1">

<div className="nav">
  <div className="logo"></div>

  <div className="home">Home</div>

  <div
    className="property"
    onMouseEnter={() => handleMouseEnter('property')}
    onMouseLeave={handleMouseLeave}
  >
    Property
    {hoveredElement === 'property' && (
      <div className="menu">
        <ul>
          <li>Property Products<span className="iconm"> <MdNavigateNext /></span></li>
          <li>Document Review<span className="iconm"> <MdNavigateNext /></span></li>

        </ul>
      </div>
    )}
  </div>
  <div
    className="document"
    onMouseEnter={() => handleMouseEnter('document')}
    onMouseLeave={handleMouseLeave}
  >
    Document
    {hoveredElement === 'document' && (
      <div className="menu">
        <ul>
          <li>Document Review & Consult<span className="iconm"> <MdNavigateNext /></span></li>
          <li>Startup Documents<span className="iconm"> <MdNavigateNext /></span></li>
          <li>Agreeements & Contracts<span className="iconm"> <MdNavigateNext /></span></li>
          <li>Property Documents<span className="iconm"> <MdNavigateNext /></span></li>
        </ul>
      </div>
    )}
  </div>
  <div
    className="startup"
    onMouseEnter={() => handleMouseEnter('startup')}
    onMouseLeave={handleMouseLeave}
  >
    Startup
    {hoveredElement === 'startup' && (
      <div className="menu">
        <ul>
          <li>Company Formation<span className="iconm"> <MdNavigateNext /></span></li>
          <li>Intellectual Property<span className="iconm"> <MdNavigateNext /></span></li>
          <li>Registrations & Licenses<span className="iconm"> <MdNavigateNext /></span></li>

        </ul>
      </div>
    )}
  </div>
  <div className="company">Company</div>
  <div className="connect"> <button className=" button">connect</button></div>
</div>
<div className="total">


  <div className="left"></div>
  <div className="right"></div>
  <div className="image"></div>
  <div className="grid1"></div>
  <div className="grid2">
    <div className="first">DISCOVER,<span className="fc">ANALYZE</span></div>
    <div className="second">AND STAY INFORMED



      <button className="but1">Talk to layer</button>
    </div>
  </div>
  <div className="grid3"></div>



</div>


</div>
   
   </>
  );
};

// Export the Menu component as the default export
export default Nav;
