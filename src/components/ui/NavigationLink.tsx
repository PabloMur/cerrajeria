type NavigationLinkType = {
  href: string;
  text: string;
  handleClick?: any;
};
export default function NavigationLink({
  href,
  text,
  handleClick,
}: NavigationLinkType) {
  return (
    <li onClick={handleClick}>
      <a className="font-bold" href={href}>
        {text}
      </a>
    </li>
  );
}
