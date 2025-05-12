import { testimonials } from "@/data/testimonials";

const Testimonial = () => {
  const paddings = ["pt-4", "pt-8", "pt-12", "pt-16"];

  return (
    <div className="bg-[#f7f7f7] pb-16 sm:pb-20 md:pb-40 px-4 sm:px-6">
      <div className="min-h-screen py-10 relative">
        <div className="container mx-auto columns-2 md:columns-4 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mb-4 sm:mb-6">
              <TestimonialCard
                testimonial={testimonial}
                padding={paddings[index % paddings.length]}
              />
            </div>
          ))}
        </div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #f7f7f7 0%, transparent 20%, transparent 80%, #f7f7f7 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Testimonial;

interface TestimonialCardProps {
  testimonial: {
    name: string;
    text: string;
    likes: number;
  };
  padding: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  padding,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 space-y-2">
      <h4 className="text-xl font-medium">{testimonial.name}</h4>
      <p className="text-gray-600 text-sm">{testimonial.text}</p>
      <span className={`flex items-center gap-1 ${padding}`}>
        ❤️ {testimonial.likes}
      </span>
    </div>
  );
};
