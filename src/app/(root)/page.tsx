import Navbar from "@/components/common/Navbar";
import Header from "@/components/Header";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import Courses from "@/components/Courses";
import SectionSix from "@/components/SectionSix";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/common/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Courses />
      <SectionSix />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
