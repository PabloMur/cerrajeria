import Link from "next/link";
export default function Logo() {
  return (
    <div className="text-xl sm:text-2xl cursor-pointer flex items-center justify-center gap-2">
      <Link href="/">
        <p className="text-black font-bold">Cerrajeria La Torre</p>
      </Link>
    </div>
  );
}
