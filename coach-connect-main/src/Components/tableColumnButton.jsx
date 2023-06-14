import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ScrollViewClients } from "../clients/scrollViewClients";

export const TableColumnButton = () => {

    const [hoverStates, setHoverStates] = useState({
        tableColumns: false,
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

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
  
      // 👇️ or simply set it to true
      // setIsShown(true);
    };

      return (
        
        <div className="mx-auto h-12 w-12 mt-16 mb-16" onClick={handleClick}>
          {/* 👇️ show component on click */}
          {isShown && <ScrollViewClients />}
            <FontAwesomeIcon 
                icon={faTableColumns} 
                className="mx-auto h-12 w-12 icon" 
                style={tableColumnsIconStyles}
                onMouseEnter={() => handleMouseEnter("tableColumns")}
                onMouseLeave={() => handleMouseLeave("tableColumns")} />
        </div>
      );
      
}