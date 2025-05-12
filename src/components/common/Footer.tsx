import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#171717] text-[#f7f7f7] px-4 rounded-t-[50px]">
      <div className="container mx-auto flex flex-col md:flex-row py-12">
        <div className="md:w-1/2 space-y-8 md:space-y-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl">hello@relix.com</h2>
          <ul className="space-y-2">
            <li>Benefits</li>
            <li>Our Partners</li>
            <li>Courses</li>
            <li>Testimonials</li>
          </ul>
          <input
            type="email"
            placeholder="Email address"
            className="outline-none border-b py-2 w-3/5"
          />
          <div className="space-x-4">
            <button>
              <FaXTwitter className="size-6" />
            </button>
            <button>
              <FaInstagram className="size-6" />
            </button>
            <button>
              <FaLinkedin className="size-6" />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex items-end">
          <h1 className="text-[200px] md:text-[300px] w-full text-center md:text-start -mb-12">
            relix
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
