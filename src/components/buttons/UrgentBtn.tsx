"use client";
export default function UrgentBtn() {
  const handleClick = () => {
    alert("The user has an emergency");
  };
  return (
    <button className="p-4 bg-black rounded-xl text-xl" onClick={handleClick}>
      Tengo una urgencia
    </button>
  );
}
