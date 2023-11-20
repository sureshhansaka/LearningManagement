import React, { useState } from "react";
import logoutImage from "../icons/logout.png";
import hatImage from "../icons/Hat.png";
import avatarImage from "../icons/avatar.png";

const DashboardNavigation = ({ buttons, onLogout }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    console.log(index);
    setActiveButton(index);
  };

  const dashboardStyle = {
    display: "flex",
    height: "95.1vh",
    width: "259px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 10px",
    borderBottom: "1px solid #000",
    background: "black",
  };

  const ulStyle = {
    listStyle: "none",
    padding: 0,
    marginTop: "77px",
  };

  const logoutStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
  };

  const imageStyle = {
    marginRight: "10px",
  };

  const dashboardButtonStyle = (buttonContent) => ({
    background:
      activeButton === null
        ? "transparent"
        : activeButton === buttonContent
        ? "#0BE2E2"
        : "transparent",
    border:
      activeButton === null
        ? "1px solid #fff"
        : activeButton === buttonContent
        ? "1px solid #0BE2E2"
        : "1px solid #fff",
    cursor: "pointer",
    color:
      activeButton === null
        ? "white"
        : activeButton === buttonContent
        ? "black"
        : "white",
    fontSize: "20px",
    fontFamily: "Montserrat",
    padding: "10px 20px",
    marginBottom: "40px",
    borderRadius: "30px",
    width: "199px",
    height: "56px",
  });

  const logoutButtonStyle = {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "white",
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    fontFamily: "Montserrat",
  };

  return (
    <div className="dashboard-navigation" style={dashboardStyle}>
      <img src={hatImage} alt="Hat" style={{ marginTop: "10px" }} />
      <img src={avatarImage} alt="Avatar" style={{ marginTop: "50px" }} />
      <p
        style={{
          color: "white",
          marginTop: "20px",
          fontFamily: "montserrat",
          fontSize: "20px",
        }}
      >
        Mary Johnson
      </p>
      <ul style={ulStyle}>
        {buttons &&
          buttons.map((button) => (
            <li key={button}>
              <button
                style={dashboardButtonStyle(button)}
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </button>
            </li>
          ))}
      </ul>
      <p style={logoutStyle}>
        <button style={logoutButtonStyle} onClick={onLogout}>
          <img src={logoutImage} alt="LogOut" style={imageStyle} />
          Log Out
        </button>
      </p>
    </div>
  );
};

export default DashboardNavigation;
