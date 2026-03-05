type NavigationLinkType = {
  href: string;
  text: string;
  handleClick?: () => void;
};

export default function NavigationLink({ href, text, handleClick }: NavigationLinkType) {
  return (
    <li onClick={handleClick} className="cursor-pointer list-none">
      <a
        href={href}
        className="font-semibold text-accent hover:text-accent/70 transition-colors duration-150 relative group text-sm"
      >
        {text}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-200 rounded-full" />
      </a>
    </li>
  );
}
