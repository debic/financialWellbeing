import {
    AppstoreOutlined,
    MenuOutlined,
    MessageOutlined,
    PieChartOutlined,
  } from "@ant-design/icons";
  import React, { useState } from "react";
  import "./NavBar.css";
  
  import Logo from "../../assets/logo.png";
  import FooterImage from "../../assets/img-footer.png";
  
  const NavBar = () => {
    const [isOpened, setIsOpened] = useState(false);
  
    return (
      <div className={`navbar ${isOpened ? "opened" : ""}`}>
        <div className="header">
          {isOpened && <img src={Logo} alt="" />}
          <MenuOutlined onClick={() => setIsOpened((prev) => !prev)} />
        </div>
        <div className="actions">
          <div>
            <AppstoreOutlined />
            <span className="text">{isOpened && "DASHBOARD"}</span>
          </div>
          <div>
            <MessageOutlined />
            <span className="text">{isOpened && "FORM"}</span>
          </div>
          <div>
            <PieChartOutlined />
            <span className="text">{isOpened && "ANALYTICS"}</span>
          </div>
        </div>
        <div className="footer">
          <img src={FooterImage} alt="" />
        </div>
      </div>
    );
  };
  
  export default NavBar;
