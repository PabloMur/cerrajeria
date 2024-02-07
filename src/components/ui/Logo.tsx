import Link from "next/link";
export default function Logo() {
  return (
    <div className="text-xl sm:text-2xl font-bold cursor-pointer">
      <Link href="/">
        <p className="text-black">Cerrajeria La Torre</p>
      </Link>
    </div>
  );
}
