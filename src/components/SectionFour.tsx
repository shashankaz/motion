import Image from "next/image";
import { companies } from "@/data/companies";

const SectionFour = () => {
  return (
    <div className="bg-[#171717] min-h-screen flex items-center px-4 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-[#f7f7f7] h-40 rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-200 group"
          >
            <Image
              src={company.logo}
              alt={company.name + " logo"}
              width={100}
              height={100}
              className="object-contain h-20 w-32 md:grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFour;
