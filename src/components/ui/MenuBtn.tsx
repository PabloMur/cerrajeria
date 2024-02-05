import cross from "../../../public/cross.svg";
import menu from "../../../public/menu.svg";
import Image from "next/image";
const Cross = ({ handleClick }: any) => {
  return (
    <div onClick={handleClick} className="h-8 w-8 sm:hidden">
      <Image src={cross} alt="croos image"></Image>
    </div>
  );
};
const Burger = ({ handleClick }: any) => {
  return (
    <div onClick={handleClick} className="h-8 w-8 sm:hidden">
      <Image src={menu} alt="burger image"></Image>
    </div>
  );
};
export default function MenuBtn({ state, setState }: any) {
  const handleClick = () => {
    return setState(!state);
  };
  return state ? (
    <Burger handleClick={handleClick}></Burger>
  ) : (
    <Cross handleClick={handleClick}></Cross>
  );
}
