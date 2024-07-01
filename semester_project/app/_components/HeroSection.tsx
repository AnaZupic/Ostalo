import HeroImageGrid, { HeroImageObject } from "./HeroImageGrid";
import Button from "@/components/Button";

import heroImage1 from "@/public/hero/05_na_crte_pozadina.png";
import heroImage2 from "@/public/hero/1696692443-sok-za-splicane-hajduk-u-derbi-bez-jednog-od-najboljih-igraca.jpg";
import heroImage3 from "@/public/hero/k_25750921_640.webp";
import heroImage4 from "@/public/hero/large-011.jpg";

const images: HeroImageObject[] = [
  { image: heroImage1, borderRadius: "20% 0 0 0" },
  { image: heroImage2, borderRadius: "0 20% 0 0" },
  { image: heroImage3, borderRadius: "0 0 0 20%" },
  { image: heroImage4, borderRadius: "0 0 20% 0" },
];

const HeroSection = () => (
  <section className="container flex justify-between items-center gap-10 w-screen mb-8">
    <div className="flex flex-col justify-start gap-5 max-w-xl m-auto lg:m-0">
      <h1 className="font-serif text-5xl text-center lg:text-left xl:text-6xl font-extrabold text-brand-blue-50 whitespace-break-spaces">
        Prgava Familija
      </h1>
      <br />
      <p className="font-roboto text-brand-grey-900 text-center lg:text-left xl:text-lg whitespace-break-spaces">
        Welcome to{" "}
        <span className="font-roboto-condensed font-bold text-base xl:text-xl text-brand-grey-900 whitespace-nowrap">
          hajduk story. 
        </span>
        <br /> A blog about the biggest football club in Croatia. 
        Founded in 1911, it is the oldest club which currently has more than 100 000 members.
      </p>
    </div>
    <div className="hidden lg:block flex-shrink-0">
      <HeroImageGrid images={images} />
    </div>
  </section>
);

export default HeroSection;
