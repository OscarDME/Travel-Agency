import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as UILink,
  Image,
} from "@nextui-org/react";
import Link from 'next/link';
import { NAV_ITEMS } from "../constants/constants";

const Navbar1 = () => {
  return (
    <Navbar shouldHideOnScroll>
      <div className="flex justify-between md:justify-center items-center w-full px-14 bg-orange-500 h-20">
        <NavbarBrand>
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/images/avion.png"
                alt="Logo"
                className="h-10 w-auto"
              />
              <p className="ml-2 font-bold text-md tracking-widest hidden sm:block">
                VIAJES MADRIZ
              </p>
            </div>
          </Link>         
        </NavbarBrand>
        <NavbarContent className="flex sm:gap-12 gap-4 sm:ml-40">
          {NAV_ITEMS.map((item, index) => (
            <NavbarItem key={index} className="font-bold">
              <UILink href={item.href}><p className="hover:text-gray-200 md:text-lg">{item.label}</p></UILink>
            </NavbarItem>
          ))}
        </NavbarContent>
      </div>
    </Navbar>
  );
};

export default Navbar1;
