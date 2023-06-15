import React, { useState } from 'react';
import { ScrollViewClients } from '../ClientSearch/scrollViewClients';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [navVisible, setNavVisible] = useState(false);

  const handleItemClick = (index) => {
    if (index === 0) { // Only update state if the first icon is clicked
      if (index === activeIndex && navVisible) {
        setNavVisible(false); // If the same icon is clicked again and component is visible, hide the component
      } else {
        setActiveIndex(index);
        setNavVisible(true);
      }
    }
  };

  return (
    <div className="flex h-screen">
      {/* Navbar */}
      <div className="flex-none w-16 bg-off-white text-black flex flex-col justify-center">
        <ul className="py-4 flex flex-col justify-between h-full">
          <li>
            {/* First Icon */}
            <button
              className={`w-12 h-12 flex justify-center items-center ${
                activeIndex === 0 ? 'bg-gray-600' : ''
              }`}
              onClick={() => handleItemClick(0)}
            >
              {/* Icon for Component 1 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </li>
          <li>
            {/* Second Icon */}
            <button
              className={`w-12 h-12 flex justify-center items-center ${
                activeIndex === 1 ? 'bg-gray-600' : ''
              }`}
              onClick={() => handleItemClick(1)}
            >
              {/* Icon for Component 2 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 5h5m-5 0H8"
                />
              </svg>
            </button>
          </li>
          <li>
            {/* Third Icon */}
            <button
              className={`w-12 h-12 flex justify-center items-center ${
                activeIndex === 2 ? 'bg-gray-600' : ''
              }`}
              onClick={() => handleItemClick(2)}
            >
              {/* Icon for Component 3 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 5h5m-5 0H8"
                />
              </svg>
            </button>
          </li>
          <li>
            {/* Fourth Icon */}
            <button
              className={`w-12 h-12 flex justify-center items-center ${
                activeIndex === 3 ? 'bg-gray-600' : ''
              }`}
              onClick={() => handleItemClick(3)}
            >
              {/* Icon for Component 4 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      {/* Main content */}
      <div className="flex-grow bg-gray-200 relative overflow-hidden">
        {/* Content for each component */}
        <div
          className={`absolute top-0 left-0 h-full w-1/4 transition-transform ${
            navVisible ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
          style={{
            transitionProperty: 'transform',
            transitionDuration: '0.75s',
          }}
        >
          {activeIndex === 0 && ( // Only render Component1 when activeIndex is 0
            <div className="h-full">
              <ScrollViewClients />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Rest of the components...

const Component1 = () => {
  return (
    <div className="h-full">
      <ScrollViewClients />
    </div>
  );
};

const Component2 = () => {
  return <div>Component 2 Content</div>;
};

const Component3 = () => {
  return <div>Component 3 Content</div>;
};

const Component4 = () => {
  return <div>Component 4 Content</div>;
};

export default Navbar;






// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
// import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
// import { TableColumnButton } from "./tableColumnButton"

// function Navbar() {

//     const [hoverStates, setHoverStates] = useState({
//         tableColumns: false,
//         calendarDays: false,
//         noteSticky: false
//       });

//       const handleMouseEnter = (iconName) => {
//         setHoverStates((prevState) => ({
//           ...prevState,
//           [iconName]: true
//         }));
//       };

//      const handleMouseLeave = (iconName) => {
//         setHoverStates((prevState) => ({
//             ...prevState,
//             [iconName]: false
//         }));
//     };

//     const iconStyles = {
//         color: "#95ac9a",
//         cursor: "pointer"
//       };
    
//       const calendarDaysIconStyles = {
//         ...iconStyles,
//         color: hoverStates.calendarDays ? "#6d8773" : "#95ac9a"
//       };
    
//       const noteStickyIconStyles = {
//         ...iconStyles,
//         color: hoverStates.noteSticky ? "#6d8773" : "#95ac9a"
//       };


//     return (
//             <div className="bg-off-white h-screen w-auto mt-12 shadow-xL" style={{
//                     position: "relative",
//                     left: 0,
//                 }}>
//                 <div className="mx-auto">
//                     <img src={require("../images/CC.png")} alt="Coach Connect Logo" className="h-24 w-24 mx-auto" style={{cursor: "pointer"}}/>
//                 </div>
//                 <TableColumnButton />
//                 <div className="mx-auto h-12 w-12 mt-16 mb-16">
//                     <FontAwesomeIcon 
//                     icon={faCalendarDays} 
//                     className="mx-auto h-12 w-12 icon" 
//                     style={calendarDaysIconStyles}
//                     onMouseEnter={() => handleMouseEnter("calendarDays")}
//                     onMouseLeave={() => handleMouseLeave("calendarDays")} />
//                 </div>
//                 <div className="mx-auto h-12 w-12 mt-16 mb-16">
//                     <FontAwesomeIcon 
//                     icon={faNoteSticky} 
//                     className="mx-auto h-12 w-12 icon" 
//                     style={noteStickyIconStyles}
//                     onMouseEnter={() => handleMouseEnter("noteSticky")}
//                     onMouseLeave={() => handleMouseLeave("noteSticky")} />
//                 </div>
//             </div>
//     );
//   }

//   export default Navbar;