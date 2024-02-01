"use client";
export default function NavigationLink({ href, text }: any) {
  return (
    <li>
      <a className="font-bold" href={href}>
        {text}
      </a>
    </li>
  );
}
