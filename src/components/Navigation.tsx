"use client";
import React, { useState } from "react";
import Logo from "./ui/Logo";
import NavigationLink from "./ui/NavigationLink";
import LittleBanner from "./LittleBanner";
import MenuBtn from "./ui/MenuBtn";
import { useNavigationScroll } from "@/hooks";
import DesktopMenu from "./DesktopMenu";

export default function Navigation() {
  useNavigationScroll();
  const [menuState, setMenuState] = useState(true);
  //por el momento no es necesario este componente
  //<LittleBanner></LittleBanner>
  return (
    <nav className="bg-secondary text-black sm:p-4 py-6 w-[100%] fixed flex flex-col justify-center items-center">
      <div className="flex justify-between items-center w-full px-4">
        <Logo></Logo>
        <MenuBtn state={menuState} setState={setMenuState}></MenuBtn>
        <DesktopMenu></DesktopMenu>
      </div>
      {!menuState && (
        <div className="bg-secondary flex justify-center items-center sm:px-20 h-96 absolute top-20 left-0 right-0 bottom-0">
          <ul className="flex sm:space-x-4 h-full flex-col justify-center items-center gap-3">
            <NavigationLink
              href={"#home"}
              text={"Inicio"}
              handleClick={() => {
                setMenuState(!menuState);
              }}
            ></NavigationLink>
            <NavigationLink
              href={"#servicios"}
              text={"Servicios"}
              handleClick={() => {
                setMenuState(!menuState);
              }}
            ></NavigationLink>
            <NavigationLink
              href={"#about"}
              text={"Acerca de Nosotros"}
              handleClick={() => {
                setMenuState(!menuState);
              }}
            ></NavigationLink>
            <NavigationLink
              href={"#location"}
              text={"Ubicacion"}
              handleClick={() => {
                setMenuState(!menuState);
              }}
            ></NavigationLink>
            <NavigationLink
              href={"#contacto"}
              text={"Contacto"}
              handleClick={() => {
                setMenuState(!menuState);
              }}
            ></NavigationLink>
          </ul>
        </div>
      )}
    </nav>
  );
}
