import React, { useState } from "react";
import './button.css'
import RegisterButton from "./registerButton/RegisterButton";
import LoginButton from "./loginButton/LoginButton";

const HeaderButtons: React.FC = () => {

  return (
    <div className="header__buttons">
      <RegisterButton />
      <LoginButton />
    </div>
  )
}
export default HeaderButtons
