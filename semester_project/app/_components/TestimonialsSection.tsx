import Button from "@/components/Button";
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";

import testimonial1 from "@/public/testimonials/livaja.jpeg";
import testimonial2 from "@/public/testimonials/krovi.jpeg";
import testimonial3 from "@/public/testimonials/melnjak.jpeg";
import testimonial4 from "@/public/testimonials/sahiti.jpeg";

const testimonials: TestimonialCardProps[] = [
  {
    image: testimonial1,
    title: "Marko Livaja",
    body: "Forward & captain",
  },
  {
    image: testimonial2,
    title: "Filip Krovinović",
    body: "Midfielder",
  },
  {
    image: testimonial3,
    title: "Dario Melnjak",
    body: "Left-back",
  },
  {
    image: testimonial4,
    title: "Emir Sahiti",
    body: "Left-wing",
  },
];

const TestimonialsSection = () => (
  <section className="container flex flex-col gap-10 lg:gap-10 items-center">
    <div className="text-center mt-4">
      <h1 className="hidden sm:block font-serif text-3xl font-extrabold text-brand-blue-50">
        Valuable Players of Hajduk
      </h1>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.title} {...testimonial} />
      ))}
    </div>
    <Button
      blue
      className="mb-10 text-base xl:text-lg xl:px-8"
      iconClassName="xl:w-4 xl:h-4"
    >
      View players
    </Button>
  </section>
);

export default TestimonialsSection;
