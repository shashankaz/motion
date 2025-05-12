import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="pt-20 md:pt-28 min-h-screen bg-[#f7f7f7] flex flex-col items-center justify-center gap-6 md:gap-10">
      <div className="flex flex-col gap-4 md:gap-8 items-center container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight text-center">
          Watch your financial <br /> knowledge bloom and grow
        </h1>
        <Button className="md:p-6">Explore courses</Button>
      </div>
      <Image
        src="/tree.png"
        alt="tree"
        width={600}
        height={600}
        className="w-[25rem] sm:w-[30rem] md:w-[37rem]"
        draggable={false}
        priority
      />
    </div>
  );
};

export default Header;
