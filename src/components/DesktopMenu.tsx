import NavigationLink from "./ui/NavigationLink";

export default function DesktopMenu() {
  return (
    <div className="hidden sm:flex justify-center items-center">
      <ul className="flex space-x-4 h-full justify-center items-center">
        <NavigationLink href={"#home"} text={"Inicio"}></NavigationLink>
        <NavigationLink href={"#servicios"} text={"Servicios"}></NavigationLink>
        <NavigationLink
          href={"#about"}
          text={"Acerca de Nosotros"}
        ></NavigationLink>
        <NavigationLink href={"#location"} text={"Ubicacion"}></NavigationLink>
        <NavigationLink href={"#contacto"} text={"Contacto"}></NavigationLink>
      </ul>
    </div>
  );
}
