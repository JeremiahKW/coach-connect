import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {

    const [hoverStates, setHoverStates] = useState({
        tableColumns: false,
        calendarDays: false,
        noteSticky: false
      });

      const handleMouseEnter = (iconName) => {
        setHoverStates((prevState) => ({
          ...prevState,
          [iconName]: true
        }));
      };

     const handleMouseLeave = (iconName) => {
        setHoverStates((prevState) => ({
            ...prevState,
            [iconName]: false
        }));
    };

    const iconStyles = {
        color: "#95ac9a",
        cursor: "pointer"
      };
    
      const tableColumnsIconStyles = {
        ...iconStyles,
        color: hoverStates.tableColumns ? "#6d8773" : "#95ac9a"
      };
    
      const calendarDaysIconStyles = {
        ...iconStyles,
        color: hoverStates.calendarDays ? "#6d8773" : "#95ac9a"
      };
    
      const noteStickyIconStyles = {
        ...iconStyles,
        color: hoverStates.noteSticky ? "#6d8773" : "#95ac9a"
      };


    return (
            <div className="bg-off-white h-screen w-auto mt-12 shadow-xL" style={{
                    position: "relative",
                    left: 0,
                }}>
                <div className="mx-auto">
                    <img src={require("../images/CC.png")} alt="Coach Connect Logo" className="h-24 w-24 mx-auto" style={{cursor: "pointer"}}/>
                </div>
                <div className="mx-auto h-12 w-12 mt-16 mb-16">
                    <FontAwesomeIcon 
                    icon={faTableColumns} 
                    className="mx-auto h-12 w-12 icon" 
                    style={tableColumnsIconStyles}
                    onMouseEnter={() => handleMouseEnter("tableColumns")}
                    onMouseLeave={() => handleMouseLeave("tableColumns")} />
                </div>
                <div className="mx-auto h-12 w-12 mt-16 mb-16">
                    <FontAwesomeIcon 
                    icon={faCalendarDays} 
                    className="mx-auto h-12 w-12 icon" 
                    style={calendarDaysIconStyles}
                    onMouseEnter={() => handleMouseEnter("calendarDays")}
                    onMouseLeave={() => handleMouseLeave("calendarDays")} />
                </div>
                <div className="mx-auto h-12 w-12 mt-16 mb-16">
                    <FontAwesomeIcon 
                    icon={faNoteSticky} 
                    className="mx-auto h-12 w-12 icon" 
                    style={noteStickyIconStyles}
                    onMouseEnter={() => handleMouseEnter("noteSticky")}
                    onMouseLeave={() => handleMouseLeave("noteSticky")} />
                </div>
            </div>
    );
  }

  export default Navbar;