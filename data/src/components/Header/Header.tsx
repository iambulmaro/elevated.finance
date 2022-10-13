import React from "react";
import { HeaderWrap, LogoLink } from "./HeaderStyle";

const Header: React.FC = () => {
  return (
    <HeaderWrap>
      <LogoLink href="/" />
    </HeaderWrap>
  );
};

export { Header };
