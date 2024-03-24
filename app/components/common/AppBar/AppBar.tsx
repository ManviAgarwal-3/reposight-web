import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button, 
  Image
} from "@nextui-org/react";

import { navLinks } from "@/constants/nav-constants";
const AppBar: React.FC = () => {
  return (
    <Navbar
      isBordered
      shouldHideOnScroll
      className="bg-transparent text-white "
      maxWidth="full"
    >
      <NavbarContent justify="end">
        <NavbarBrand className="mr-4">
          <Image
            src="reposight.svg"
            alt="Logo"
            width={200}
            height={40}
          />
        </NavbarBrand>
      </NavbarContent>

      
    </Navbar>
  );
};

export default AppBar;
