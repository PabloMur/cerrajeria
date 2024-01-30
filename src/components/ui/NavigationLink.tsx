import Link from "next/link";
export default function NavigationLink({ href, text }: any) {
  return (
    <li>
      <Link href={href}>
        <p className="font-bold">{text}</p>
      </Link>
    </li>
  );
}
