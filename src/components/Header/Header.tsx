import * as React from "react";
import { BsApple } from "react-icons/bs";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <h6>
        Nome da marca <BsApple />
      </h6>
    </HeaderStyled>
  );
};

export default Header;
