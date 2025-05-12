import Image from "next/image";

const SectionThree = () => {
  return (
    <div className="bg-[#171717] min-h-screen flex items-center px-4">
      <div className="container mx-auto md:pt-10">
        <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-[#f7f7f7] sticky top-48 mb-52">
          <div className="flex flex-col md:flex-row relative h-full">
            <div className="w-full md:w-1/2 p-6 md:p-10 z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white md:text-black">
                Accessible. Anytime. <br /> Anywhere.
              </h2>
              <p className="mt-4 text-gray-50 md:text-gray-500 md:w-2/3">
                Discover our comprehensive range of financial courses, designed
                to fit your schedule and lifestyle. With our accessible online
                platform, you can learn anytime, anywhere.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-full p-1 md:p-5 absolute inset-0 md:relative">
              <div className="rounded-2xl overflow-hidden border bg-gray-100 h-full">
                <Image
                  src="/space/1.jpg"
                  alt="Space"
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50 md:bg-transparent"></div>
          </div>
        </div>

        <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-[#f7f7f7] sticky top-48 mb-52">
          <div className="flex flex-col md:flex-row relative h-full">
            <div className="w-full md:w-1/2 p-6 md:p-10 z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white md:text-black">
                Learn from the best
              </h2>
              <p className="mt-4 text-gray-50 md:text-gray-500 md:w-2/3">
                Learn from real-world experiences, case studies, and best
                practices.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-full p-1 md:p-5 absolute inset-0 md:relative">
              <div className="rounded-2xl overflow-hidden border bg-gray-100 h-full">
                <Image
                  src="/space/2.jpg"
                  alt="Space"
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50 md:bg-transparent"></div>
          </div>
        </div>

        <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-[#f7f7f7] sticky top-48 mb-52">
          <div className="flex flex-col md:flex-row relative h-full">
            <div className="w-full md:w-1/2 p-6 md:p-10 z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white md:text-black">
                Get affordable pricing
              </h2>
              <p className="mt-4 text-gray-50 md:text-gray-500 md:w-4/5">
                Access our courses at affordable prices that fit your budget. We
                offer competitive pricing to ensure high-quality education is
                accessible to everyone, without breaking the bank.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-full p-1 md:p-5 absolute inset-0 md:relative">
              <div className="rounded-2xl overflow-hidden border bg-gray-100 h-full">
                <Image
                  src="/space/3.jpg"
                  alt="Space"
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50 md:bg-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
