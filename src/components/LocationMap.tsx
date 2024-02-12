export default function LocationMap() {
  return (
    <div className="w-full flex justify-center items-center h-[70%]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.583959326575!2d-57.5554279!3d-38.0101636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dea04f5bb439%3A0xa328f725394f2422!2sC%C3%B3rdoba%203030%2C%20B7602CAF%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1706753274173!5m2!1ses-419!2sar"
        style={{ border: "0" }}
        width={"100%"}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="hidden"
      ></iframe>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.583959326575!2d-57.5554279!3d-38.0101636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dea04f5bb439%3A0xa328f725394f2422!2sC%C3%B3rdoba%203030%2C%20B7602CAF%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1706753274173!5m2!1ses-419!2sar"
        style={{ border: "0" }}
        width={"80%"}
        height={"100%"}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className=""
      ></iframe>
    </div>
  );
}
