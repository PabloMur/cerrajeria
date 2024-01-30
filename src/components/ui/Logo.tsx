import Link from "next/link";
export default function Logo() {
  return (
    <div className="text-2xl font-bold">
      <Link href="/">
        <p className="text-black">Cerrajeria La Torre</p>
      </Link>
    </div>
  );
}
